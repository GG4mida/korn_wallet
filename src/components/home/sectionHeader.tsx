import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import Icon from 'react-native-vector-icons/Feather';

const HomeSectionHeader = (props: any) => {
  const {data} = props;
  return (
    <View
      style={tailwind('mt-8 mb-5 flex flex-row justify-between items-center')}>
      <Text style={tailwind('text-xl text-gray-700')}>持仓</Text>
      {data && data.length ? (
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-yellow-500')}>交易记录</Text>
          <Icon name="arrow-right" size={18} color={getColor('yellow-500')} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HomeSectionHeader;
