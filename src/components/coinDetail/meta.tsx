import React from 'react';
import {View, Text} from 'react-native';
import {Formater} from '@/utils';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {styles} from '@/styles';

const CoinMeta = () => {
  const route = useRoute();

  const coin: any = route.params;
  const {symbol} = coin;

  const {list: marketList} = useSelector((state: any) => state.market);
  const marketInfo = marketList[symbol];
  const {h: dayHigh, l: dayLow, n: dayCount, v: dayVolumn} = marketInfo;

  const dayCountData: any = Formater.formatBigNumber(dayCount);
  const dayVolumnData: any = Formater.formatBigNumber(dayVolumn);

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.flex_wrap,
        styles.p_2,
        styles.border_b,
        styles.bg_list,
      ]}>
      <View
        style={[
          styles.w_1_2,
          styles.px_2,
          styles.py_1,
          styles.flex_container_between,
        ]}>
        <Text style={[styles.text_sm, styles.text_muted]}>24h最高</Text>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content]}>${dayHigh}</Text>
        </View>
      </View>
      <View
        style={[
          styles.w_1_2,
          styles.px_2,
          styles.py_1,
          styles.flex_container_between,
        ]}>
        <Text style={[styles.text_sm, styles.text_muted]}>24h成交量</Text>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content]}>
            {`${dayCountData.value}${dayCountData.unit}`}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.w_1_2,
          styles.px_2,
          styles.py_1,
          styles.flex_container_between,
        ]}>
        <Text style={[styles.text_sm, styles.text_muted]}>24h最低</Text>
        <View style={[styles.flex_container_center]}>
          <Text
            style={[styles.text_sm, styles.text_content]}>{`$${dayLow}`}</Text>
        </View>
      </View>
      <View
        style={[
          styles.w_1_2,
          styles.px_2,
          styles.py_1,
          styles.flex_container_between,
        ]}>
        <Text style={[styles.text_sm, styles.text_muted]}>24h成交额</Text>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content]}>
            {`$${dayVolumnData.value}${dayVolumnData.unit}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinMeta;
