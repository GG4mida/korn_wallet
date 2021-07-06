import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';
import {Formater} from '@/utils';

interface IProps {
  data: any;
}

const OverViewJumbo = (props: IProps) => {
  const {styles} = useTheme();
  const {data} = props;
  const {balanceCurrent, balanceInit, holdAmount, totalAmount} = data;
  return (
    <View style={[styles.bg_foreground]}>
      <View
        style={[
          styles.flex_col,
          styles.items_center,
          styles.py_5,
          styles.my_5,
          styles.border_b,
        ]}>
        <Text style={[styles.text_md, styles.text_hint, styles.mb_2]}>
          总资产
        </Text>
        <Text style={[styles.text_3xl, styles.text_bold, styles.text_content]}>
          ${Formater.formatAmount(totalAmount)}
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
            账户余额
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(balanceCurrent)}
          </Text>
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
            持仓价值
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(holdAmount)}
          </Text>
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
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(balanceInit)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OverViewJumbo;
