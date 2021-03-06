import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@/hooks';

const DiscoveryItem = (props: any) => {
  const {styles} = useTheme();
  const {data, col = 4, handlePress} = props;
  const {icon, name, handlePress: handleItemPress} = data;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        handleItemPress && typeof handleItemPress === 'function'
          ? handleItemPress(data)
          : handlePress(data)
      }
      style={[
        styles.flex_col,
        styles.items_center,
        styles.justify_between,
        styles[`w_1_${col}`],
        styles.my_3,
      ]}>
      {icon}
      <Text style={[styles.text_sm, styles.text_content, styles.mt_2]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default DiscoveryItem;
