import {space} from '../config';
import {StyleSheet} from 'react-native';

const SPACE_1 = space.size;
const SPACE_2 = space.size * 2;
const SPACE_3 = space.size * 3;
const SPACE_4 = space.size * 4;
const SPACE_5 = space.size * 5;

const paddingStyles = StyleSheet.create({
  p_0: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  p_1: {
    paddingTop: SPACE_1,
    paddingRight: SPACE_1,
    paddingBottom: SPACE_1,
    paddingLeft: SPACE_1,
  },
  p_2: {
    paddingTop: SPACE_2,
    paddingRight: SPACE_2,
    paddingBottom: SPACE_2,
    paddingLeft: SPACE_2,
  },
  p_3: {
    paddingTop: SPACE_3,
    paddingRight: SPACE_3,
    paddingBottom: SPACE_3,
    paddingLeft: SPACE_3,
  },
  p_4: {
    paddingTop: SPACE_4,
    paddingRight: SPACE_4,
    paddingBottom: SPACE_4,
    paddingLeft: SPACE_4,
  },
  p_5: {
    paddingTop: SPACE_5,
    paddingRight: SPACE_5,
    paddingBottom: SPACE_5,
    paddingLeft: SPACE_5,
  },

  py_0: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  py_1: {
    paddingTop: SPACE_1,
    paddingBottom: SPACE_1,
  },

  py_2: {
    paddingTop: SPACE_2,
    paddingBottom: SPACE_2,
  },

  py_3: {
    paddingTop: SPACE_3,
    paddingBottom: SPACE_3,
  },

  py_4: {
    paddingTop: SPACE_4,
    paddingBottom: SPACE_4,
  },

  py_5: {
    paddingTop: SPACE_5,
    paddingBottom: SPACE_5,
  },

  px_0: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  px_1: {
    paddingLeft: SPACE_1,
    paddingRight: SPACE_1,
  },

  px_2: {
    paddingLeft: SPACE_2,
    paddingRight: SPACE_2,
  },

  px_3: {
    paddingLeft: SPACE_3,
    paddingRight: SPACE_3,
  },

  px_4: {
    paddingLeft: SPACE_4,
    paddingRight: SPACE_4,
  },

  px_5: {
    paddingLeft: SPACE_5,
    paddingRight: SPACE_5,
  },

  pl_0: {
    paddingLeft: 0,
  },

  pl_1: {
    paddingLeft: SPACE_1,
  },

  pl_2: {
    paddingLeft: SPACE_2,
  },

  pl_3: {
    paddingLeft: SPACE_3,
  },

  pl_4: {
    paddingLeft: SPACE_4,
  },

  pl_5: {
    paddingLeft: SPACE_5,
  },

  pr_0: {
    paddingRight: 0,
  },

  pr_1: {
    paddingRight: SPACE_1,
  },

  pr_2: {
    paddingRight: SPACE_2,
  },

  pr_3: {
    paddingRight: SPACE_3,
  },

  pr_4: {
    paddingRight: SPACE_4,
  },

  pr_5: {
    paddingRight: SPACE_5,
  },

  pt_0: {
    paddingTop: 0,
  },

  pt_1: {
    paddingTop: SPACE_1,
  },

  pt_2: {
    paddingTop: SPACE_2,
  },

  pt_3: {
    paddingTop: SPACE_3,
  },

  pt_4: {
    paddingTop: SPACE_4,
  },

  pt_5: {
    paddingTop: SPACE_5,
  },

  pb_0: {
    paddingBottom: 0,
  },

  pb_1: {
    paddingBottom: SPACE_1,
  },

  pb_2: {
    paddingBottom: SPACE_2,
  },

  pb_3: {
    paddingBottom: SPACE_3,
  },

  pb_4: {
    paddingBottom: SPACE_4,
  },

  pb_5: {
    paddingBottom: SPACE_5,
  },
});

export default paddingStyles;
