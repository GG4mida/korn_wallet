import React from 'react';
import {View, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';

const NewsHeader = (props: any) => {
  const {data} = props;
  return (
    <View style={tailwind('px-5 py-2 bg-white border-b border-gray-50')}>
      <Text style={tailwind('text-base text-gray-600')}>{data.title}</Text>
    </View>
  );
};

export default NewsHeader;
