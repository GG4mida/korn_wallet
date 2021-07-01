import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@/hooks';

const Avatar = (props: any) => {
  const {styles, styleConfig} = useTheme();
  const {text, color} = props;

  const avatarText = text.slice(0, 1);
  const avatarColor = useMemo(() => {
    let result = color;
    if (!result) {
      const colors = [
        styleConfig.color.green,
        styleConfig.color.blue,
        styleConfig.color.red,
        styleConfig.color.yellow,
      ];
      result = colors[Math.floor(Math.random() * colors.length)];
    }
    return result;
  }, [color, styleConfig]);

  return (
    <View
      style={[
        styles.flex_container_center,
        styles.rounded_full,
        customStyles.container,
        {
          backgroundColor: avatarColor,
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
