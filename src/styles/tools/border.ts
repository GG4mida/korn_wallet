import {color} from '../config';

import {StyleSheet} from 'react-native';

const borderStyles = StyleSheet.create({
  border: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: color.border_item,
    borderRightColor: color.border_item,
    borderTopColor: color.border_item,
    borderBottomColor: color.border_item,
  },

  border_0: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },

  border_transparent: {
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },

  border_l: {
    borderLeftWidth: 1,
    borderLeftColor: color.border_item,
  },

  border_r: {
    borderRightWidth: 1,
    borderRightColor: color.border_item,
  },

  border_t: {
    borderTopWidth: 1,
    borderTopColor: color.border_item,
  },

  border_b: {
    borderBottomWidth: 1,
    borderBottomColor: color.border_item,
  },
});

export default borderStyles;
