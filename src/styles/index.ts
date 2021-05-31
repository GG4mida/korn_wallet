import {StyleSheet} from 'react-native';
import toolStyles from './tools';
import * as styleConfig from './config';

const _baseStyles = {
  container: {
    ...toolStyles.flex_1,
    ...toolStyles.bg_screen,
  },
  button: {
    ...toolStyles.flex_row,
    ...toolStyles.items_center,
    ...toolStyles.justify_center,
    ...toolStyles.text_white,
    ...toolStyles.rounded_3xl,
    width: '100%',
    minWidth: 156,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
};

const componentStyles = StyleSheet.create({
  screen_container: {
    ..._baseStyles.container,
  },

  screen_container_with_padding: {
    ..._baseStyles.container,
    ...toolStyles.p_4,
  },

  tab_container: {
    ...toolStyles.border_t,
    height: 92,
  },

  flex_container_center: {
    ...toolStyles.flex_row,
    ...toolStyles.items_center,
    ...toolStyles.justify_center,
  },

  flex_container_between: {
    ...toolStyles.flex_row,
    ...toolStyles.items_center,
    ...toolStyles.justify_between,
  },

  text_input: {
    ...toolStyles.rounded_3xl,
    ...toolStyles.text_md,
    lineHeight: 20,
    borderWidth: 1,
    borderColor: styleConfig.color.border_input,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  button_green: {
    ..._baseStyles.button,
    ...toolStyles.bg_green,
  },

  button_blue: {
    ..._baseStyles.button,
    ...toolStyles.bg_blue,
  },

  button_red: {
    ..._baseStyles.button,
    ...toolStyles.bg_red,
  },

  button_yellow: {
    ..._baseStyles.button,
    ...toolStyles.bg_yellow,
  },

  button_sm: {
    ..._baseStyles.button,
    minWidth: 156,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  mask: {
    ...toolStyles.absolute_fill,
    ...toolStyles.flex_1,
    ...toolStyles.items_center,
    ...toolStyles.justify_center,
    ...toolStyles.bg_mask,
  },

  img_coin: {
    width: 32,
    height: 32,
  },

  img_user: {
    width: 42,
    height: 42,
  },

  img_header: {
    width: 18,
    height: 18,
  },
});

const styles = {
  ...toolStyles,
  ...componentStyles,
};

export {styleConfig, styles};
