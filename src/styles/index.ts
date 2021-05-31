import {StyleSheet} from 'react-native';
import toolStyles from './tools';
import * as styleConfig from './config';

const _baseStyles = {
  container: {
    ...toolStyles.flex_1,
    ...toolStyles.bg_background,
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

  bg_mask: {
    ...toolStyles.absolute_fill,
    ...toolStyles.flex_1,
    ...toolStyles.items_center,
    ...toolStyles.justify_center,
    ...toolStyles.bg_transparent,
  },
});

const styles = {
  ...toolStyles,
  ...componentStyles,
};

export {styleConfig, styles};
