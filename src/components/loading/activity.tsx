import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from '@/styles';

const LoadingActivity = (props: any) => {
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return (
    <View style={[styles.px_4]}>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default LoadingActivity;
