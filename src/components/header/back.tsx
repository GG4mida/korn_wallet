import React from 'react';
import {View} from 'react-native';
import {IconBack} from '@/components/icons';
import {styleConfig, styles} from '@/styles';

const HeaderBack = () => {
  return (
    <View style={[styles.ml_3, styles.mr_1]}>
      <IconBack width={20} height={20} fill={styleConfig.color.blue} />
    </View>
  );
};

export default HeaderBack;
