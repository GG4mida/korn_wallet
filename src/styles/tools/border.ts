import {colors} from '../config';

import {StyleSheet} from 'react-native';

const borderStyles = StyleSheet.create({
  border: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: colors.color_border,
    borderRightColor: colors.color_border,
    borderTopColor: colors.color_border,
    borderBottomColor: colors.color_border,
  },

  'border-0': {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },

  'border-transparent': {
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },

  'border-l': {
    borderLeftWidth: 1,
    borderLeftColor: colors.color_border,
  },

  'border-r': {
    borderRightWidth: 1,
    borderRightColor: colors.color_border,
  },

  'border-t': {
    borderTopWidth: 1,
    borderTopColor: colors.color_border,
  },

  'border-b': {
    borderBottomWidth: 1,
    borderBottomColor: colors.color_border,
  },
});

export default borderStyles;
