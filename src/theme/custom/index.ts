import {StyleSheet} from 'react-native';

const getCustomStyle = (toolStyle: any) => {
  const _baseStyles = {
    container: {
      ...toolStyle.flex_1,
      ...toolStyle.bg_background,
    },
  };

  return StyleSheet.create({
    screen_container: {
      ..._baseStyles.container,
    },

    screen_container_with_padding: {
      ..._baseStyles.container,
      ...toolStyle.p_3,
    },

    tab_container: {
      ...toolStyle.border_t,
      height: 92,
    },

    flex_container_center: {
      ...toolStyle.flex_row,
      ...toolStyle.items_center,
      ...toolStyle.justify_center,
    },

    flex_container_between: {
      ...toolStyle.flex_row,
      ...toolStyle.items_center,
      ...toolStyle.justify_between,
    },

    bg_mask: {
      ...toolStyle.absolute_fill,
      ...toolStyle.flex_1,
      ...toolStyle.items_center,
      ...toolStyle.justify_center,
      ...toolStyle.bg_transparent,
    },
  });
};

export default getCustomStyle;
