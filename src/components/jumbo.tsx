import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';
import LogoSvg from '@/assets/svg/logo.svg';

const Jumbo = () => {
  const {styles} = useTheme();
  return (
    <View
      style={[
        styles.flex_container_center,
        styles.flex_col,
        styles.py_5,
        styles.my_5,
      ]}>
      <LogoSvg width={48} height={48} />
      <Text
        style={[styles.text_lg, styles.mb_1, styles.mt_2, styles.text_leading]}>
        Korn
      </Text>
      <Text style={[styles.text_md, styles.mb_0, styles.text_content]}>
        Nothing else matters
      </Text>
    </View>
  );
};

export default Jumbo;
