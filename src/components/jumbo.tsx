import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';
import {useSelector} from 'react-redux';
import LogoSvg from '@/assets/svg/logo.svg';

const Jumbo = () => {
  const {styles} = useTheme();
  const {info: systemInfo} = useSelector((state: any) => state.system);
  const {name, slogan} = systemInfo;
  return (
    <View
      style={[
        styles.flex_container_center,
        styles.flex_col,
        styles.py_5,
        styles.my_5,
      ]}>
      <LogoSvg width={56} height={56} />
      <Text
        style={[styles.text_lg, styles.mb_1, styles.mt_2, styles.text_leading]}>
        {name}
      </Text>
      <Text style={[styles.text_md, styles.mb_0, styles.text_content]}>
        {slogan}
      </Text>
    </View>
  );
};

export default Jumbo;
