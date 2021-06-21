import React from 'react';
import {View} from 'react-native';
import {IconBack} from '@/components/icons';
import useTheme from '@/core/theme';

const HeaderBack = () => {
  const {styleConfig, styles} = useTheme();
  return (
    <View style={[styles.ml_3]}>
      <IconBack width={20} height={20} fill={styleConfig.color.blue} />
    </View>
  );
};

export default HeaderBack;
