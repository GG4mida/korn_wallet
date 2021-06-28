import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@/hooks';

const LoadingMask = (props: any) => {
  const {styles} = useTheme();
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return <View style={[styles.bg_mask]} />;
};

export default LoadingMask;
