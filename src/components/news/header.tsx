import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '@/styles';

const NewsHeader = (props: any) => {
  const {data} = props;
  return (
    <View style={[styles.border_b, styles.px_5, styles.py_2, styles.bg_news]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        {data.title}
      </Text>
    </View>
  );
};

export default NewsHeader;
