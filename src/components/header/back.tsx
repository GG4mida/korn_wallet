import React from 'react';
import {View} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import {IconBack} from '@/components/icons';

const HeaderBack = () => {
  return (
    <View style={tailwind('ml-4 mr-1')}>
      <IconBack width={20} height={20} fill={getColor('blue-600')} />
    </View>
  );
};

export default HeaderBack;
