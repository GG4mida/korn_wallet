import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/hooks';
import {find} from 'lodash';
import {useSelector} from 'react-redux';
import {IconArrowRight} from '@/components/icons';
import {useRoute} from '@react-navigation/native';
import {Formater} from '@/utils';

interface IProps {
  value: number;
  coin: any;
}

const SellSummary = (props: IProps) => {
  const {styles, styleConfig} = useTheme();

  const {value, coin} = props;

  const renderData = useMemo(() => {
    const result = {
      amount: '0.00',
      volumn: '0',
    };
    const {coin_price, coin_hold_volumn} = coin;
    const sellVolumn = Formater.fixed(coin_hold_volumn * (value / 100), 4);
    const sellAmount = Formater.formatAmount(
      parseFloat(sellVolumn) * parseFloat(coin_price),
    );
    result.amount = sellAmount;
    result.volumn = sellVolumn;
    return result;
  }, [value, coin]);

  const {coin_symbol} = coin;

  return (
    <View
      style={[styles.flex_container_between, styles.p_4, styles.bg_foreground]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        卖出汇总
      </Text>
      <View style={[styles.flex_row, styles.items_center, styles.justify_end]}>
        <Text
          style={[
            styles.text_md,
            styles.text_content,
          ]}>{`${renderData.volumn} ${coin_symbol}`}</Text>
        <IconArrowRight
          fill={styleConfig.color.content}
          width={16}
          height={16}
          style={[styles.mx_2]}
        />
        <Text
          style={[
            styles.text_md,
            styles.text_content,
          ]}>{`$${renderData.amount}`}</Text>
      </View>
    </View>
  );
};

export default SellSummary;
