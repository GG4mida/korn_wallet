import React from 'react';
import {View} from 'react-native';
import Styles from '@/core/styles';

const LoadingMask = (props: any) => {
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return <View style={Styles.loadingMask} />;
};

export default LoadingMask;
