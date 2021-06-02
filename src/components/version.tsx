import React from 'react';
import {View, Text} from 'react-native';
import useTheme from '@/core/theme';

const Version = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.flex_container_center, styles.mb_5]}>
      <Text style={[styles.text_md, styles.text_hint]}>3.2.3</Text>
    </View>
  );
};

export default Version;
