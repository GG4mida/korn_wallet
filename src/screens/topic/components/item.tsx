import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';
import {DateTime} from '@/utils';

const TopicItem = (props: any) => {
  const {styles} = useTheme();
  const {data, handlePress} = props;
  const {title, summary, createtime} = data;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => handlePress(data)}
      style={[styles.bg_foreground, styles.mb_3, styles.px_4, styles.py_3]}>
      <Text
        style={[
          styles.text_bold,
          styles.text_md,
          styles.text_leading,
          styles.mb_2,
        ]}>
        {title}
      </Text>
      <Text style={[styles.text_content, styles.text_md, styles.mb_2]}>
        {summary}
      </Text>
      <Text style={[styles.text_hint, styles.text_sm]}>
        {DateTime.format(createtime, DateTime.FORMATER_DATETIME)}
      </Text>
    </TouchableOpacity>
  );
};

export default TopicItem;
