import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';

const HistoryHeader = () => {
  const {styles} = useTheme();
  return (
    <View
      style={[
        styles.flex_container_between,
        styles.bg_foreground,
        styles.py_2,
        styles.px_3,
        styles.border_b,
      ]}>
      <View style={[styles.w_1_4]}>
        <View style={[styles.flex_row, styles.items_center]}>
          <Text style={[styles.text_content_secondary]}>币种/操作</Text>
        </View>
      </View>
      <View style={[styles.w_1_4]}>
        <View
          style={[styles.flex_row, styles.justify_end, styles.items_center]}>
          <Text style={[styles.text_content_secondary]}>价格/数量</Text>
        </View>
      </View>
      <View style={[styles.w_1_4]}>
        <View
          style={[styles.flex_row, styles.justify_end, styles.items_center]}>
          <Text style={[styles.text_content_secondary]}>金额</Text>
        </View>
      </View>
      <View style={[styles.w_1_4]}>
        <View
          style={[styles.flex_row, styles.justify_end, styles.items_center]}>
          <Text style={[styles.text_content_secondary]}>时间</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryHeader;
