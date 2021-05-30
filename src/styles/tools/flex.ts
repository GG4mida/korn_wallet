import {StyleSheet} from 'react-native';

const flexStyles = StyleSheet.create({
  'flex-1': {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'flex-nowrap': {
    flexWrap: 'nowrap',
  },
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-around': {
    justifyContent: 'space-around',
  },
  'justify-evenly': {
    justifyContent: 'space-evenly',
  },
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-baseline': {
    alignItems: 'baseline',
  },
  'items-stretch': {
    alignItems: 'stretch',
  },
  'self-start': {
    alignSelf: 'flex-start',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  'self-center': {
    alignSelf: 'center',
  },
  'self-stretch': {
    alignSelf: 'stretch',
  },
});

export default flexStyles;
