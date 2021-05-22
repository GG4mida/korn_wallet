import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {getColor, tailwind} from '@/core/tailwind';
import {Toaster} from '@/utils';
import ArrowRightSvg from '@/assets/svg/arrow-right.svg';
import Slider from '@react-native-community/slider';
import {Formater} from '@/utils';
import {ResponseCode} from '@/constants/enum';

const AnimatedView = Animated.View;
let fall = new Animated.Value(1);

const PanelShadow = (props: any) => {
  const {status, handlePress} = props;

  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <AnimatedView
        pointerEvents={status === true ? 'auto' : 'none'}
        style={[
          styles.shadow,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

const PanelContent = () => {
  const [value, setValue] = useState(0);
  const route = useRoute();
  const dispatch = useDispatch();
  const ticker: any = route.params;
  const {full} = useSelector((state: any) => state.user);
  const {balance_current} = full;
  const {
    meta: {c: price},
    basic: {symbol},
  } = ticker;

  const buyInData = useMemo(() => {
    const buyInAmount = Formater.formatAmount(balance_current * (value / 100));
    const buyInVolumn = Formater.fixed(parseFloat(buyInAmount) / price, 4);

    return {
      amount: buyInAmount,
      volumn: buyInVolumn,
    };
  }, [value, price, balance_current]);

  const handleSumbitPress = useCallback(async () => {
    const MIN_BUYIN_AMOUNT = 100;

    if (parseFloat(buyInData.amount) <= MIN_BUYIN_AMOUNT) {
      Toaster.show(`买入金额不能小于$${MIN_BUYIN_AMOUNT}`);
      return false;
    }
    const buyinRes: any = await dispatch({
      type: 'ticker/buyin',
      payload: {
        coin: symbol,
        amount: buyInData.amount,
      },
    });

    const {code, content} = buyinRes;
    if (code === ResponseCode.SUCCESS) {
      Toaster.show(content);
      dispatch({
        type: 'user/holds',
      });
    }
  }, [dispatch, buyInData, symbol]);

  return (
    <View>
      <View
        style={tailwind(
          'bg-gray-100 px-5 py-4 flex-row items-center justify-between',
        )}>
        <Text style={tailwind('text-base text-gray-600')}>买入</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleSumbitPress}>
          <Text style={tailwind('text-base text-red-500')}>提交</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View
          style={tailwind(
            'flex-row items-center justify-between border-b border-gray-50 py-2',
          )}>
          <Text style={tailwind('text-sm text-gray-500')}>可用金额</Text>
          <Text style={tailwind('text-base text-gray-600')}>
            ${Formater.formatAmount(balance_current)}
          </Text>
        </View>
        <View
          style={tailwind(
            'flex-row items-center justify-between  border-b border-gray-50 py-2',
          )}>
          <Text style={tailwind('text-sm text-gray-500')}>当前价格</Text>
          <Text style={tailwind('text-base text-gray-600')}>
            ${Formater.formatAmount(price)}
          </Text>
        </View>
        <View
          style={tailwind(
            'flex-row items-center justify-between border-b border-gray-50 py-2',
          )}>
          <Text style={tailwind('text-sm text-gray-500')}>买入金额</Text>
          <View style={tailwind('flex flex-row items-center')}>
            <Slider
              value={value}
              onValueChange={setValue}
              step={1}
              style={styles.slider}
              tapToSeek={true}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={getColor('red-600')}
              maximumTrackTintColor={getColor('red-300')}
            />
            <Text style={tailwind('w-12 text-right text-base text-gray-600')}>
              {value}%
            </Text>
          </View>
        </View>
        <View
          style={tailwind(
            'flex-row items-center justify-between border-b border-gray-50 py-2',
          )}>
          <Text style={tailwind('text-sm text-gray-500')}>交易汇总</Text>
          <View style={tailwind('flex-row items-center justify-end')}>
            <Text style={tailwind('text-base text-gray-600')}>
              ${buyInData.amount}
            </Text>
            <ArrowRightSvg
              fill={getColor('gray-600')}
              width={16}
              height={16}
              style={tailwind('mx-2')}
            />
            <Text style={tailwind('text-base text-gray-600')}>
              {buyInData.volumn} {symbol}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

interface IProps {
  refs: any;
}

const TickerBuyInPanel = (props: IProps) => {
  const [status, setStatus] = useState(false);
  const {refs} = props;

  const handleShadowPress = () => {
    refs.current.snapTo(1);
  };

  return (
    <React.Fragment>
      <BottomSheet
        ref={refs}
        snapPoints={[260, 0]}
        borderRadius={0}
        initialSnap={1}
        callbackNode={fall}
        onCloseEnd={() => setStatus(false)}
        onOpenEnd={() => setStatus(true)}
        enabledInnerScrolling={false}
        renderContent={() => <PanelContent />}
      />
      <PanelShadow status={status} handlePress={handleShadowPress} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 130,
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 450,
  },
});

export default TickerBuyInPanel;
