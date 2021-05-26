import React, {useCallback, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {tailwind} from '@/core/tailwind';

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

const PanelContent = (props: any) => {
  const {title, text, handleSubmit, handleCancel} = props;

  return (
    <View style={tailwind('bg-white pb-20')}>
      <View
        style={tailwind(
          'flex-col items-center justify-center py-5 border-b border-gray-50',
        )}>
        <Text style={tailwind('text-base text-gray-600')}>{title}</Text>
        {text ? (
          <Text style={tailwind('text-sm text-gray-500 mt-1')}>{text}</Text>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={tailwind('py-3 border-b border-gray-50')}
          activeOpacity={0.5}
          onPress={handleSubmit}>
          <Text style={tailwind('text-center text-base text-red-600')}>
            确定
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleCancel}
          style={tailwind('py-3')}>
          <Text
            style={tailwind(
              'text-center text-base text-gray-800 border-b border-gray-50',
            )}>
            取消
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface IProps {
  title: String;
  text?: String;
  handleSubmit: any;
  handleCancel: any;
}

const Confirm = (props: IProps) => {
  const [status, setStatus] = useState(false);
  const {text, title, handleSubmit, handleCancel} = props;

  const confirmRef: any = useRef();

  useEffect(() => {
    confirmRef.current.snapTo(0);
  }, [confirmRef]);

  const handleClose = useCallback(() => {
    confirmRef.current.snapTo(1);
    setTimeout(() => {
      handleCancel();
    }, 200);
  }, [confirmRef, handleCancel]);

  const handleSubmitPress = useCallback(() => {
    confirmRef.current.snapTo(1);
    setTimeout(() => {
      handleSubmit();
    }, 200);
  }, [confirmRef, handleSubmit]);

  return (
    <React.Fragment>
      <BottomSheet
        ref={confirmRef}
        snapPoints={[200, 0]}
        borderRadius={0}
        initialSnap={1}
        callbackNode={fall}
        onCloseEnd={() => setStatus(false)}
        onOpenEnd={() => setStatus(true)}
        enabledInnerScrolling={false}
        renderContent={() => (
          <PanelContent
            handleSubmit={handleSubmitPress}
            handleCancel={handleClose}
            title={title}
            text={text}
          />
        )}
      />
      <PanelShadow status={status} handlePress={handleClose} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

export default Confirm;
