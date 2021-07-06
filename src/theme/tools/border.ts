import {StyleSheet} from 'react-native';

const getBorderStyle = ({color}: any) => {
  return StyleSheet.create({
    border: {
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderLeftColor: color.border_list,
      borderRightColor: color.border_list,
      borderTopColor: color.border_list,
      borderBottomColor: color.border_list,
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
      borderLeftColor: color.border_list,
    },

    border_r: {
      borderRightWidth: 1,
      borderRightColor: color.border_list,
    },

    border_t: {
      borderTopWidth: 1,
      borderTopColor: color.border_list,
    },

    border_b: {
      borderBottomWidth: 1,
      borderBottomColor: color.border_list,
    },
  });
};

export default getBorderStyle;
