import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const AnimatedView = Animated.View;
let fall = new Animated.Value(1);

const PanelShadow = () => {
  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <AnimatedView
      pointerEvents="none"
      style={[
        styles.shadow,
        {
          opacity: animatedShadowOpacity,
        },
      ]}
    />
  );
};

const PanelContent = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text>halo</Text>
      </View>
    </View>
  );
};

interface IProps {
  refs: any;
}

const TickerBuyInPanel = (props: IProps) => {
  const {refs} = props;
  return (
    <React.Fragment>
      <BottomSheet
        ref={refs}
        snapPoints={[320, 0]}
        borderRadius={15}
        initialSnap={0}
        callbackNode={fall}
        renderContent={() => <PanelContent />}
      />
      <PanelShadow />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
  },
});

export default TickerBuyInPanel;
