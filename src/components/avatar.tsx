import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@/hooks';

const Avatar = (props: any) => {
  const {styles, styleConfig} = useTheme();

  const getRandomColor = useCallback(() => {
    const colors = [
      styleConfig.color.green,
      styleConfig.color.blue,
      styleConfig.color.red,
      styleConfig.color.yellow,
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, [styleConfig]);

  let {text, color} = props;
  const avatarText = text.slice(0, 1);
  if (!color) {
    color = getRandomColor();
  }

  return (
    <View
      style={[
        styles.flex_container_center,
        styles.rounded_full,
        customStyles.container,
        {
          backgroundColor: color,
        },
      ]}>
      <Text style={[styles.text_white, styles.text_bold, styles.text_2xl]}>
        {avatarText}
      </Text>
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
  },
});

export default Avatar;
