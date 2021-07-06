import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useTheme} from '@/hooks';

const LoadingActivity = (props: any) => {
  const {styles, styleConfig} = useTheme();
  const {loading} = props;
  if (!loading) {
    return null;
  }
  return (
    <View style={[styles.px_4]}>
      <ActivityIndicator size="small" color={styleConfig.color.hint} />
    </View>
  );
};

export default LoadingActivity;
