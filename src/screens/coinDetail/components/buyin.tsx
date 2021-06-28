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
import {Toaster} from '@/utils';
import ArrowRightSvg from '@/assets/svg/arrow-right.svg';
import Slider from '@react-native-community/slider';
import {Formater} from '@/utils';
import {ResponseCode} from '@/constants/enum';
import {useTheme} from '@/hooks';

const AnimatedView = Animated.View;
let fall = new Animated.Value(1);

const PanelShadow = (props: any) => {
  const {status, handlePress} = props;
  const {styles} = useTheme();

  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <AnimatedView
        pointerEvents={status === true ? 'auto' : 'none'}
        style={[
          styles.absolute_fill,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

const PanelContent = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {handleSubmitSuccess} = props;
  const [value, setValue] = useState(0);
  const route = useRoute();
  const dispatch = useDispatch();
  const coin: any = route.params;
  const {symbol} = coin;
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {list: marketList} = useSelector((state: any) => state.market);
  const marketInfo = marketList[symbol];
  const {c: marketPrice} = marketInfo;
  const {balance_current} = userInfo;

  const buyInData = useMemo(() => {
    const buyInAmount = Formater.formatAmount(balance_current * (value / 100));
    const buyInVolumn = Formater.fixed(
      parseFloat(buyInAmount) / parseFloat(marketPrice),
      4,
    );
    return {
      amount: buyInAmount,
      volumn: buyInVolumn,
    };
  }, [value, marketPrice, balance_current]);

  const handleSumbitPress = useCallback(async () => {
    const MIN_BUYIN_AMOUNT = 100;
    if (parseFloat(buyInData.amount) <= MIN_BUYIN_AMOUNT) {
      Toaster.show(`买入金额不能小于$${MIN_BUYIN_AMOUNT}`);
      return false;
    }
    const buyinRes: any = await dispatch({
      type: 'coin/buyin',
      payload: {
        coin: symbol,
        amount: buyInData.amount,
      },
    });
    const {code, content} = buyinRes;
    if (code === ResponseCode.SUCCESS) {
      dispatch({
        type: 'user/info',
      });
      dispatch({
        type: 'user/holds',
      });

      Toaster.show(content);
      handleSubmitSuccess();
    }
  }, [dispatch, buyInData, symbol, handleSubmitSuccess]);

  return (
    <View style={[styles.bg_foreground, customStyle.content]}>
      <View
        style={[
          styles.flex_container_between,
          styles.bg_background,
          styles.py_2,
          styles.px_4,
          styles.border_b,
        ]}>
        <Text style={[styles.text_md, styles.text_content]}>买入</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleSumbitPress}>
          <Text style={[styles.text_md, styles.text_red]}>提交</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.bg_foreground, styles.px_4]}>
        <View
          style={[styles.flex_container_between, styles.py_2, styles.border_b]}>
          <Text style={[styles.text_md, styles.text_content_secondary]}>
            可用金额
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(balance_current)}
          </Text>
        </View>
        <View
          style={[styles.flex_container_between, styles.py_2, styles.border_b]}>
          <Text style={[styles.text_md, styles.text_content_secondary]}>
            当前价格
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(marketPrice)}
          </Text>
        </View>
        <View
          style={[styles.flex_container_between, styles.py_2, styles.border_b]}>
          <Text style={[styles.text_md, styles.text_content_secondary]}>
            买入金额
          </Text>
          <View style={[styles.flex_container_center]}>
            <Slider
              value={value}
              onValueChange={setValue}
              step={1}
              style={customStyle.slider}
              tapToSeek={true}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={styleConfig.color.red}
              maximumTrackTintColor={styleConfig.color.gray_300}
            />
            <Text
              style={[
                styles.text_md,
                styles.text_content_secondary,
                styles.ml_1,
              ]}>
              {value}%
            </Text>
          </View>
        </View>
        <View
          style={[styles.flex_container_between, styles.py_2, styles.border_b]}>
          <Text style={[styles.text_md, styles.text_content_secondary]}>
            交易汇总
          </Text>
          <View
            style={[styles.flex_row, styles.items_center, styles.justify_end]}>
            <Text style={[styles.text_md, styles.text_content]}>
              ${buyInData.amount}
            </Text>
            <ArrowRightSvg
              fill={styleConfig.color.content}
              width={16}
              height={16}
              style={[styles.mx_2]}
            />
            <Text style={[styles.text_md, styles.text_content]}>
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

const CoinDetailBuyInPanel = (props: IProps) => {
  const [status, setStatus] = useState(false);
  const {refs} = props;

  const handleSheetClose = useCallback(() => {
    refs.current.snapTo(1);
  }, [refs]);

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
        renderContent={() => (
          <PanelContent handleSubmitSuccess={handleSheetClose} />
        )}
      />
      <PanelShadow status={status} handlePress={handleSheetClose} />
    </React.Fragment>
  );
};

const customStyle = StyleSheet.create({
  content: {
    height: 300,
  },
  slider: {
    width: 130,
  },
});

export default CoinDetailBuyInPanel;
