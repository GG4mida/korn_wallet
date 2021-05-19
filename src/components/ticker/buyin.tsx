import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {getColor, tailwind} from '@/core/tailwind';
import commonStyles from '@/core/styles';
import Slider from '@react-native-community/slider';

const AnimatedView = Animated.View;
let fall = new Animated.Value(1);

const PanelShadow = (props: any) => {
  const {handlePress} = props;

  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <TouchableWithoutFeedback style={tailwind('flex-1')} onPress={handlePress}>
      <AnimatedView
        pointerEvents="none"
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
    <View style={tailwind('bg-gray-100 py-3 items-center justify-center')}>
      <Text style={tailwind('text-base text-gray-600 font-bold')}>买入</Text>
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
      <View style={tailwind('mb-5 flex-row items-center')}>
        <Text style={tailwind('text-sm text-gray-500 mr-5')}>可用金额</Text>
        <Text style={tailwind('text-base text-gray-800 flex-1')}>
          $100000.12
        </Text>
      </View>
      <View style={tailwind('mb-5 flex-row items-center')}>
        <Text style={tailwind('text-sm text-gray-500 mr-5')}>当前价格</Text>
        <Text style={tailwind('text-base text-gray-800')}>$2222.33</Text>
      </View>
      <View style={tailwind('mb-3 flex-row items-start')}>
        <Text style={tailwind('text-sm text-gray-500 mr-5')}>买入金额</Text>
        <View style={tailwind('flex-1')}>
          <Slider
            value={value}
            onValueChange={setValue}
            step={1}
            tapToSeek={true}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={getColor('red-600')}
            maximumTrackTintColor={getColor('red-300')}
          />

          <View style={tailwind('flex-row items-center')}>
            <Text style={tailwind('text-sm text-gray-500 mr-3')}>
              $12333.00
            </Text>
            <Text style={tailwind('text-sm text-gray-500')}>12.33123 BTC</Text>
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
  const {refs} = props;

  const handleShadowPress = () => {
    refs.current.snapTo(1);
  };

  return (
    <React.Fragment>
      <BottomSheet
        ref={refs}
        snapPoints={[320, 0]}
        borderRadius={0}
        initialSnap={0}
        callbackNode={fall}
        enabledInnerScrolling={false}
        renderHeader={() => <PanelHeader />}
        renderContent={() => <PanelContent />}
      />
      <PanelShadow handlePress={handleShadowPress} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    ...commonStyles.button,
    backgroundColor: getColor('yellow-500'),
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    height: 450,
  },
});

export default TickerBuyInPanel;
