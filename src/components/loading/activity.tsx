import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import useTheme from '@/core/theme';

const LoadingActivity = (props: any) => {
  const {styles} = useTheme();
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
