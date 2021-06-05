import React from 'react';
import {View, Text} from 'react-native';
import useTheme from '@/core/theme';
import {Device} from '@/utils';

const Version = () => {
  const versionString = Device.getVersion();
  const {styles} = useTheme();
  if (versionString) {
    return (
      <View style={[styles.flex_container_center, styles.mb_5]}>
        <Text style={[styles.text_md, styles.text_hint]}>{versionString}</Text>
      </View>
    );
  }
  return null;
};

export default Version;
