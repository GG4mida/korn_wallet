import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';

const NewsHeader = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View
      style={[
        styles.flex_container_center,
        styles.border_b,
        styles.px_4,
        styles.py_2,
        styles.bg_foreground,
      ]}>
      <Text style={[styles.text_content_secondary, styles.text_md]}>
        {data.title}
      </Text>
    </View>
  );
};

export default NewsHeader;
