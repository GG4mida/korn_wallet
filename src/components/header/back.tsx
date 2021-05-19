import React from 'react';
import {View} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import ArrowLeftSvg from '@/assets/svg/arrow-left.svg';

const HeaderBack = () => {
  return (
    <View style={tailwind('ml-5 mr-2')}>
      <ArrowLeftSvg width={18} height={18} fill={getColor('gray-600')} />
    </View>
  );
};

export default HeaderBack;
