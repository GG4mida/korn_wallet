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
  text_light: {
    color: color.light,
  },
  text_muted: {
    color: color.muted,
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
