import {StyleSheet} from 'react-native';

const getBackgroundStyle = ({color}: any) => {
  return StyleSheet.create({
    bg_green: {
      backgroundColor: color.green,
    },
    bg_blue: {
      backgroundColor: color.blue,
    },
    bg_red: {
      backgroundColor: color.red,
    },
    bg_yellow: {
      backgroundColor: color.yellow,
    },
    bg_background: {
      backgroundColor: color.background,
    },
    bg_foreground: {
      backgroundColor: color.foreground,
    },
    bg_transparent: {
      backgroundColor: color.transparent,
    },
    bg_gray_50: {
      backgroundColor: color.gray_50,
    },
    bg_gray_100: {
      backgroundColor: color.gray_100,
    },
    bg_gray_200: {
      backgroundColor: color.gray_200,
    },
    bg_gray_300: {
      backgroundColor: color.gray_300,
    },
    bg_gray_400: {
      backgroundColor: color.gray_400,
    },
    bg_gray_500: {
      backgroundColor: color.gray_500,
    },
    bg_gray_600: {
      backgroundColor: color.gray_600,
    },
    bg_gray_700: {
      backgroundColor: color.gray_700,
    },
    bg_gray_800: {
      backgroundColor: color.gray_800,
    },
    bg_gray_900: {
      backgroundColor: color.gray_900,
    },
    bg_black: {
      backgroundColor: color.black,
    },
  });
};
export default getBackgroundStyle;
