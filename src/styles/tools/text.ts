import {fontSize, color} from '../config';
import {StyleSheet} from 'react-native';

const textStyles = StyleSheet.create({
  text_sm: {
    fontSize: fontSize.size_sm,
    lineHeight: 20,
  },
  text_md: {
    fontSize: fontSize.size_md,
    lineHeight: 24,
  },
  text_lg: {
    fontSize: fontSize.size_lg,
    lineHeight: 28,
  },
  text_xl: {
    fontSize: fontSize.size_xl,
    lineHeight: 28,
  },
  text_2xl: {
    fontSize: fontSize.size_2xl,
    lineHeight: 32,
  },
  text_3xl: {
    fontSize: fontSize.size_3xl,
    lineHeight: 36,
  },
  text_red: {
    color: color.red,
  },
  text_green: {
    color: color.green,
  },
  text_yellow: {
    color: color.yellow,
  },
  text_blue: {
    color: color.blue,
  },
  text_black: {
    color: color.black,
  },
  text_white: {
    color: color.white,
  },
  text_leading: {
    color: color.leading,
  },
  text_content: {
    color: color.content,
  },
  text_content_secondary: {
    color: color.content_secondary,
  },
  text_hint: {
    color: color.hint,
  },
  text_gray_50: {
    color: color.gray_50,
  },
  text_gray_100: {
    color: color.gray_100,
  },
  text_gray_200: {
    color: color.gray_200,
  },
  text_gray_300: {
    color: color.gray_300,
  },
  text_gray_400: {
    color: color.gray_400,
  },
  text_gray_500: {
    color: color.gray_500,
  },
  text_gray_600: {
    color: color.gray_600,
  },
  text_gray_700: {
    color: color.gray_700,
  },
  text_gray_800: {
    color: color.gray_800,
  },
  text_gray_900: {
    color: color.gray_900,
  },
  text_left: {
    textAlign: 'left',
  },
  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  text_bold: {
    fontWeight: '600',
  },
});

export default textStyles;
