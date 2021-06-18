import React from 'react';
import {View, Text} from 'react-native';
import useTheme from '@/core/theme';

const OverViewJumbo = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.bg_foreground]}>
      <View
        style={[
          styles.flex_col,
          styles.items_center,
          styles.py_5,
          styles.border_b,
        ]}>
        <Text
          style={[styles.text_md, styles.text_content_secondary, styles.mb_1]}>
          总资产
        </Text>
        <Text style={[styles.text_2xl, styles.text_bold, styles.text_content]}>
          $328982.12
        </Text>
      </View>

      <View style={[styles.flex_container_between]}>
        <View
          style={[
            styles.w_1_3,
            styles.flex_col,
            styles.items_center,
            styles.my_3,
            styles.border_r,
          ]}>
          <Text style={[styles.text_md, styles.text_hint, styles.mb_1]}>
            持仓价值
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>$128972.12</Text>
        </View>

        <View
          style={[
            styles.w_1_3,
            styles.flex_col,
            styles.items_center,
            styles.my_3,
            styles.border_r,
          ]}>
          <Text style={[styles.text_md, styles.text_hint, styles.mb_1]}>
            账户余额
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>$128972.12</Text>
        </View>

        <View
          style={[
            styles.w_1_3,
            styles.flex_col,
            styles.items_center,
            styles.my_3,
          ]}>
          <Text style={[styles.text_md, styles.text_hint, styles.mb_1]}>
            本金
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>$100000.00</Text>
        </View>
      </View>
    </View>
  );
};

export default OverViewJumbo;
