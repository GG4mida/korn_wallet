import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';

const HeaderCoin = () => {
  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={() => null} activeOpacity={0.5} />
    </View>
  );
};

export default HeaderCoin;
