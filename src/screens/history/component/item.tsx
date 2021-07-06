import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';
import {CoinOpDirection} from '@/constants/enum';
import {Formater, DateTime} from '@/utils';

interface IProps {
  data: any;
}

const HistoryItem = (props: IProps) => {
  const {data} = props;
  const {operate} = data;
  const {coin_code, volumn, amount, price, direction, createtime} = operate;
  const {styles} = useTheme();
  const operateStyle =
    direction === CoinOpDirection.BUYIN ? styles.text_green : styles.text_red;
  const operateName = direction === CoinOpDirection.BUYIN ? '买入' : '卖出';
  return (
    <View
      style={[styles.border_b, styles.px_4, styles.bg_foreground, styles.mb_3]}>
      <View
        style={[styles.flex_container_between, styles.border_b, styles.py_2]}>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_content, styles.text_bold, styles.text_md]}>
            {coin_code}
          </Text>
        </View>
        <Text style={[operateStyle, styles.text_md]}>{operateName}</Text>
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
              ${Formater.formatAmount(price)}
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
              {Formater.fixed(volumn, 4)}
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
              ${Formater.formatAmount(amount)}
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
              {DateTime.format(createtime, DateTime.FORMATER_DATE)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryItem;
