import {StyleSheet} from 'react-native';

const getFlexStyle = () => {
  return StyleSheet.create({
    flex_1: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0%',
    },
    flex_row: {
      flexDirection: 'row',
    },
    flex_col: {
      flexDirection: 'column',
    },
    flex_wrap: {
      flexWrap: 'wrap',
    },
    flex_nowrap: {
      flexWrap: 'nowrap',
    },
    justify_start: {
      justifyContent: 'flex-start',
    },
    justify_end: {
      justifyContent: 'flex-end',
    },
    justify_center: {
      justifyContent: 'center',
    },
    justify_between: {
      justifyContent: 'space-between',
    },
    justify_around: {
      justifyContent: 'space-around',
    },
    justify_evenly: {
      justifyContent: 'space-evenly',
    },
    items_start: {
      alignItems: 'flex-start',
    },
    items_end: {
      alignItems: 'flex-end',
    },
    items_center: {
      alignItems: 'center',
    },
    items_baseline: {
      alignItems: 'baseline',
    },
    items_stretch: {
      alignItems: 'stretch',
    },
    self_start: {
      alignSelf: 'flex-start',
    },
    self_end: {
      alignSelf: 'flex-end',
    },
    self_center: {
      alignSelf: 'center',
    },
    self_stretch: {
      alignSelf: 'stretch',
    },
  });
};

export default getFlexStyle;
