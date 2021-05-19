import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {getColor, tailwind} from '@/core/tailwind';
import ArrowRightSvg from '@/assets/svg/arrow-right.svg';
import Slider from '@react-native-community/slider';

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

const PanelHeader = () => {
  return (
    <View
      style={tailwind(
        'bg-gray-100 px-5 py-4 flex-row items-center justify-between',
      )}>
      <Text style={tailwind('text-base text-gray-600')}>买入</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
        <Text style={tailwind('text-base text-red-500')}>提交</Text>
      </TouchableOpacity>
    </View>
  );
};

const PanelContent = () => {
  const [value, setValue] = useState(0);

  // const route = useRoute();
  // const ticker: any = route.params;
  // const {full} = useSelector((state: any) => state.user);
  // const {holds} = useSelector((state: any) => state.user);

  return (
    <View style={styles.content}>
      <View
        style={tailwind(
          'flex-row items-center justify-between border-b border-gray-50 py-3',
        )}>
        <Text style={tailwind('text-sm text-gray-500')}>可用金额</Text>
        <Text style={tailwind('text-base text-gray-600')}>$100000.12</Text>
      </View>
      <View
        style={tailwind(
          'flex-row items-center justify-between  border-b border-gray-50 py-3',
        )}>
        <Text style={tailwind('text-sm text-gray-500')}>当前价格</Text>
        <Text style={tailwind('text-base text-gray-600')}>$2222.33</Text>
      </View>
      <View
        style={tailwind(
          'flex-row items-center justify-between border-b border-gray-50 py-3',
        )}>
        <Text style={tailwind('text-sm text-gray-500')}>买入金额</Text>
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
      </View>
      <View
        style={tailwind(
          'flex-row items-center justify-between border-b border-gray-50 py-3',
        )}>
        <Text style={tailwind('text-sm text-gray-500')}>交易汇总</Text>
        <View style={tailwind('flex-row items-center justify-end')}>
          <Text style={tailwind('text-base text-gray-600')}>$12333.00</Text>
          <ArrowRightSvg
            fill={getColor('gray-600')}
            width={16}
            height={16}
            style={tailwind('mx-2')}
          />
          <Text style={tailwind('text-base text-gray-600')}>12.33123 BTC</Text>
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
        snapPoints={[300, 0]}
        borderRadius={0}
        initialSnap={1}
        callbackNode={fall}
        onCloseEnd={() => setStatus(false)}
        onOpenEnd={() => setStatus(true)}
        enabledInnerScrolling={false}
        renderHeader={() => <PanelHeader />}
        renderContent={() => <PanelContent />}
      />
      <PanelShadow status={status} handlePress={handleShadowPress} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 200,
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
