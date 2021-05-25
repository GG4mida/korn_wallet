import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';

const getRandomColor = () => {
  const colors = ['green-400', 'yellow-400', 'red-400', 'pink-400', 'blue-400'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return getColor(color);
};

const Avatar = (props: any) => {
  const {text} = props;
  const avatarText = text.slice(0, 1);
  const avatarColor = getRandomColor();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: avatarColor,
        },
      ]}>
      <Text style={tailwind('text-white text-2xl font-bold')}>
        {avatarText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
});

export default Avatar;
