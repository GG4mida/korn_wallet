import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from '@/styles';

const HeaderCoin = () => {
  return (
    <View style={[styles.flex_container_center, styles.px_4]}>
      <TouchableOpacity onPress={() => null} activeOpacity={0.5} />
    </View>
  );
};

export default HeaderCoin;
