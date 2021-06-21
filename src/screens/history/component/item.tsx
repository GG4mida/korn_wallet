import React from 'react';
import {View, Image, Text} from 'react-native';
import useTheme from '@/core/theme';

const HistoryItem = () => {
  const {styles} = useTheme();
  return (
    <View
      style={[styles.border_b, styles.px_4, styles.bg_foreground, styles.mb_3]}>
      <View
        style={[styles.flex_container_between, styles.border_b, styles.py_2]}>
        <View style={[styles.flex_container_center]}>
          <Image
            source={{uri: 'http://127.0.0.1:7070/public/coin/btc.png'}}
            style={[styles.rounded_full, styles.mr_1, styles.img_header]}
          />
          <Text style={[styles.text_leading, styles.text_md]}>BTC</Text>
        </View>
        <Text style={[styles.text_green, styles.text_md]}>买入</Text>
      </View>

      <View
        style={[
          styles.flex_container_between,
          styles.flex_wrap,
          styles.py_2,
          styles.bg_foreground,
        ]}>
        <View style={[styles.w_1_2, styles.border_r, styles.pr_3]}>
          <View
            style={[
              styles.flex_row,
              styles.mb_1,
              styles.items_center,
              styles.justify_between,
            ]}>
            <Text style={[styles.text_md, styles.text_hint, styles.mr_2]}>
              成本
            </Text>
            <Text style={[styles.text_md, styles.text_content]}>
              $123123.12
            </Text>
          </View>
          <View
            style={[
              styles.flex_row,
              styles.mb_1,
              styles.items_center,
              styles.justify_between,
            ]}>
            <Text style={[styles.text_md, styles.text_hint, styles.mr_2]}>
              数量
            </Text>
            <Text style={[styles.text_md, styles.text_content]}>
              1.2313 BTC
            </Text>
          </View>
        </View>

        <View style={[styles.w_1_2, styles.pl_3]}>
          <View
            style={[
              styles.flex_row,
              styles.mb_1,
              styles.items_center,
              styles.justify_between,
            ]}>
            <Text style={[styles.text_md, styles.text_hint, styles.mr_2]}>
              金额
            </Text>
            <Text style={[styles.text_md, styles.text_content]}>
              $123123.12
            </Text>
          </View>
          <View
            style={[
              styles.flex_row,
              styles.mb_1,
              styles.items_center,
              styles.justify_between,
            ]}>
            <Text style={[styles.text_md, styles.text_hint, styles.mr_2]}>
              时间
            </Text>
            <Text style={[styles.text_md, styles.text_content]}>
              2021-06-18
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryItem;
