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
import useTheme from '@/core/theme';

const AnimatedView = Animated.View;
const fall = new Animated.Value(1);

const ConfirmShadow = (props: any) => {
  const {styles} = useTheme();
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
          styles.absolute_fill,
          styles.bg_black,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

const ConfirmContent = (props: any) => {
  const {styles} = useTheme();
  const {title, text, handleSubmit, handleCancel} = props;
  return (
    <View style={[styles.bg_foreground, customStyle.content]}>
      <View
        style={[
          styles.flex_col,
          styles.justify_center,
          styles.items_center,
          styles.border_b,
          styles.py_4,
        ]}>
        <Text style={[styles.text_md, styles.text_leading]}>{title}</Text>
        {text ? (
          <Text style={[styles.text_sm, styles.text_content, styles.mt_2]}>
            {text}
          </Text>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[styles.py_2, styles.border_b]}
          activeOpacity={0.5}
          onPress={handleSubmit}>
          <Text style={[styles.text_center, styles.text_red, styles.text_md]}>
            确定
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleCancel}
          style={[styles.py_2]}>
          <Text
            style={[styles.text_center, styles.text_content, styles.text_md]}>
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

  const ref: any = useRef();

  useEffect(() => {
    ref.current.snapTo(0);
  }, [ref]);

  const handleClose = useCallback(() => {
    ref.current.snapTo(1);
    setTimeout(() => {
      handleCancel();
    }, 200);
  }, [ref, handleCancel]);

  const handleSubmitPress = useCallback(() => {
    ref.current.snapTo(1);
    setTimeout(() => {
      handleSubmit();
    }, 200);
  }, [ref, handleSubmit]);

  const confirmHeight = text ? 200 : 170;

  return (
    <React.Fragment>
      <BottomSheet
        ref={ref}
        snapPoints={[confirmHeight, 0]}
        borderRadius={0}
        initialSnap={1}
        callbackNode={fall}
        onCloseEnd={() => setStatus(false)}
        onOpenEnd={() => setStatus(true)}
        enabledInnerScrolling={false}
        renderContent={() => (
          <ConfirmContent
            handleSubmit={handleSubmitPress}
            handleCancel={handleClose}
            title={title}
            text={text}
          />
        )}
      />
      <ConfirmShadow status={status} handlePress={handleClose} />
    </React.Fragment>
  );
};

const customStyle = StyleSheet.create({
  content: {
    height: 220,
  },
});

export default Confirm;
