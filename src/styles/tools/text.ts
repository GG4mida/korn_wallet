import {fontSize} from '../config';
import {StyleSheet} from 'react-native';

const textStyles = StyleSheet.create({
  'text-sm': {
    fontSize: fontSize.size_sm,
    lineHeight: 20,
  },
  'text-md': {
    fontSize: fontSize.size_md,
    lineHeight: 24,
  },
  'text-lg': {
    fontSize: fontSize.size_lg,
    lineHeight: 28,
  },
  'text-xl': {
    fontSize: fontSize.size_xl,
    lineHeight: 28,
  },
  'text-2xl': {
    fontSize: fontSize.size_2xl,
    lineHeight: 32,
  },
  'text-3xl': {
    fontSize: fontSize.size_3xl,
    lineHeight: 36,
  },
});

export default textStyles;
