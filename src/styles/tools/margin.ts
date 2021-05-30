import {space} from '../config';
import {StyleSheet} from 'react-native';

const SPACE_1 = space.size;
const SPACE_2 = space.size * 2;
const SPACE_3 = space.size * 3;
const SPACE_4 = space.size * 4;
const SPACE_5 = space.size * 5;

const marginStyles = StyleSheet.create({
  'm-0': {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  'm-1': {
    marginTop: SPACE_1,
    marginRight: SPACE_1,
    marginBottom: SPACE_1,
    marginLeft: SPACE_1,
  },
  'm-2': {
    marginTop: SPACE_2,
    marginRight: SPACE_2,
    marginBottom: SPACE_2,
    marginLeft: SPACE_2,
  },
  'm-3': {
    marginTop: SPACE_3,
    marginRight: SPACE_3,
    marginBottom: SPACE_3,
    marginLeft: SPACE_3,
  },
  'm-4': {
    marginTop: SPACE_4,
    marginRight: SPACE_4,
    marginBottom: SPACE_4,
    marginLeft: SPACE_4,
  },
  'm-5': {
    marginTop: SPACE_5,
    marginRight: SPACE_5,
    marginBottom: SPACE_5,
    marginLeft: SPACE_5,
  },

  'my-0': {
    marginTop: 0,
    marginBottom: 0,
  },

  'my-1': {
    marginTop: SPACE_1,
    marginBottom: SPACE_1,
  },

  'my-2': {
    marginTop: SPACE_2,
    marginBottom: SPACE_2,
  },

  'my-3': {
    marginTop: SPACE_3,
    marginBottom: SPACE_3,
  },

  'my-4': {
    marginTop: SPACE_4,
    marginBottom: SPACE_4,
  },

  'my-5': {
    marginTop: SPACE_5,
    marginBottom: SPACE_5,
  },

  'mx-0': {
    marginLeft: 0,
    marginRight: 0,
  },

  'mx-1': {
    marginLeft: SPACE_1,
    marginRight: SPACE_1,
  },

  'mx-2': {
    marginLeft: SPACE_2,
    marginRight: SPACE_2,
  },

  'mx-3': {
    marginLeft: SPACE_3,
    marginRight: SPACE_3,
  },

  'mx-4': {
    marginLeft: SPACE_4,
    marginRight: SPACE_4,
  },

  'mx-5': {
    marginLeft: SPACE_5,
    marginRight: SPACE_5,
  },

  'ml-0': {
    marginLeft: 0,
  },

  'ml-1': {
    marginLeft: SPACE_1,
  },

  'ml-2': {
    marginLeft: SPACE_2,
  },

  'ml-3': {
    marginLeft: SPACE_3,
  },

  'ml-4': {
    marginLeft: SPACE_4,
  },

  'ml-5': {
    marginLeft: SPACE_5,
  },

  'mr-0': {
    marginRight: 0,
  },

  'mr-1': {
    marginRight: SPACE_1,
  },

  'mr-2': {
    marginRight: SPACE_2,
  },

  'mr-3': {
    marginRight: SPACE_3,
  },

  'mr-4': {
    marginRight: SPACE_4,
  },

  'mr-5': {
    marginRight: SPACE_5,
  },

  'mt-0': {
    marginTop: 0,
  },

  'mt-1': {
    marginTop: SPACE_1,
  },

  'mt-2': {
    marginTop: SPACE_2,
  },

  'mt-3': {
    marginTop: SPACE_3,
  },

  'mt-4': {
    marginTop: SPACE_4,
  },

  'mt-5': {
    marginTop: SPACE_5,
  },

  'mb-0': {
    marginBottom: 0,
  },

  'mb-1': {
    marginBottom: SPACE_1,
  },

  'mb-2': {
    marginBottom: SPACE_2,
  },

  'mb-3': {
    marginBottom: SPACE_3,
  },

  'mb-4': {
    marginBottom: SPACE_4,
  },

  'mb-5': {
    marginBottom: SPACE_5,
  },
});

export default marginStyles;
