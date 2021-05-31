import React from 'react';
import {View} from 'react-native';
import {styles} from '@/styles';

const LoadingMask = (props: any) => {
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return <View style={[styles.bg_mask]} />;
};

export default LoadingMask;
