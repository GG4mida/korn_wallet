import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';

const LoadingActivity = (props: any) => {
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return (
    <View style={tailwind('px-5')}>
      <ActivityIndicator color={getColor('gray-600')} size="small" />
    </View>
  );
};

export default LoadingActivity;
