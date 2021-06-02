import {StyleSheet} from 'react-native';

const getPositionStyle = () => {
  return StyleSheet.create({
    absolute_fill: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
  });
};

export default getPositionStyle;
