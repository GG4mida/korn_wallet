import {StyleSheet} from 'react-native';
import {color} from '../config';

const _baseStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    minWidth: 156,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
});

const buttonStyles = StyleSheet.create({
  button_green: {
    ..._baseStyles.button,
    backgroundColor: color.green,
  },

  button_blue: {
    ..._baseStyles.button,
    backgroundColor: color.blue,
  },

  button_red: {
    ..._baseStyles.button,
    backgroundColor: color.red,
  },

  button_yellow: {
    ..._baseStyles.button,
    backgroundColor: color.yellow,
  },

  button_sm: {
    ..._baseStyles.button,
    minWidth: 86,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default buttonStyles;
