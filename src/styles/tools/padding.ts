import {space} from '../config';
import {StyleSheet} from 'react-native';

const SPACE_1 = space.size;
const SPACE_2 = space.size * 2;
const SPACE_3 = space.size * 3;
const SPACE_4 = space.size * 4;
const SPACE_5 = space.size * 5;

const paddingStyles = StyleSheet.create({
  'p-0': {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  'p-1': {
    paddingTop: SPACE_1,
    paddingRight: SPACE_1,
    paddingBottom: SPACE_1,
    paddingLeft: SPACE_1,
  },
  'p-2': {
    paddingTop: SPACE_2,
    paddingRight: SPACE_2,
    paddingBottom: SPACE_2,
    paddingLeft: SPACE_2,
  },
  'p-3': {
    paddingTop: SPACE_3,
    paddingRight: SPACE_3,
    paddingBottom: SPACE_3,
    paddingLeft: SPACE_3,
  },
  'p-4': {
    paddingTop: SPACE_4,
    paddingRight: SPACE_4,
    paddingBottom: SPACE_4,
    paddingLeft: SPACE_4,
  },
  'p-5': {
    paddingTop: SPACE_5,
    paddingRight: SPACE_5,
    paddingBottom: SPACE_5,
    paddingLeft: SPACE_5,
  },

  'py-0': {
    paddingTop: 0,
    paddingBottom: 0,
  },

  'py-1': {
    paddingTop: SPACE_1,
    paddingBottom: SPACE_1,
  },

  'py-2': {
    paddingTop: SPACE_2,
    paddingBottom: SPACE_2,
  },

  'py-3': {
    paddingTop: SPACE_3,
    paddingBottom: SPACE_3,
  },

  'py-4': {
    paddingTop: SPACE_4,
    paddingBottom: SPACE_4,
  },

  'py-5': {
    paddingTop: SPACE_5,
    paddingBottom: SPACE_5,
  },

  'px-0': {
    paddingLeft: 0,
    paddingRight: 0,
  },

  'px-1': {
    paddingLeft: SPACE_1,
    paddingRight: SPACE_1,
  },

  'px-2': {
    paddingLeft: SPACE_2,
    paddingRight: SPACE_2,
  },

  'px-3': {
    paddingLeft: SPACE_3,
    paddingRight: SPACE_3,
  },

  'px-4': {
    paddingLeft: SPACE_4,
    paddingRight: SPACE_4,
  },

  'px-5': {
    paddingLeft: SPACE_5,
    paddingRight: SPACE_5,
  },

  'pl-0': {
    paddingLeft: 0,
  },

  'pl-1': {
    paddingLeft: SPACE_1,
  },

  'pl-2': {
    paddingLeft: SPACE_2,
  },

  'pl-3': {
    paddingLeft: SPACE_3,
  },

  'pl-4': {
    paddingLeft: SPACE_4,
  },

  'pl-5': {
    paddingLeft: SPACE_5,
  },

  'pr-0': {
    paddingRight: 0,
  },

  'pr-1': {
    paddingRight: SPACE_1,
  },

  'pr-2': {
    paddingRight: SPACE_2,
  },

  'pr-3': {
    paddingRight: SPACE_3,
  },

  'pr-4': {
    paddingRight: SPACE_4,
  },

  'pr-5': {
    paddingRight: SPACE_5,
  },

  'pt-0': {
    paddingTop: 0,
  },

  'pt-1': {
    paddingTop: SPACE_1,
  },

  'pt-2': {
    paddingTop: SPACE_2,
  },

  'pt-3': {
    paddingTop: SPACE_3,
  },

  'pt-4': {
    paddingTop: SPACE_4,
  },

  'pt-5': {
    paddingTop: SPACE_5,
  },

  'pb-0': {
    paddingBottom: 0,
  },

  'pb-1': {
    paddingBottom: SPACE_1,
  },

  'pb-2': {
    paddingBottom: SPACE_2,
  },

  'pb-3': {
    paddingBottom: SPACE_3,
  },

  'pb-4': {
    paddingBottom: SPACE_4,
  },

  'pb-5': {
    paddingBottom: SPACE_5,
  },
});

export default paddingStyles;
