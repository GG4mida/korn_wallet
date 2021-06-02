import {StyleSheet} from 'react-native';

const getRoundedStyle = () => {
  return StyleSheet.create({
    rounded: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
    rounded_sm: {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 2,
    },
    rounded_md: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
    },
    rounded_lg: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    },
    rounded_xl: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
    },
    rounded_2xl: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    },
    rounded_3xl: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
      borderBottomLeftRadius: 24,
    },
    rounded_full: {
      borderTopLeftRadius: 9999,
      borderTopRightRadius: 9999,
      borderBottomRightRadius: 9999,
      borderBottomLeftRadius: 9999,
    },
  });
};

export default getRoundedStyle;
