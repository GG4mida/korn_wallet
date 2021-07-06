import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/hooks';
import {IconArrowRight} from '@/components/icons';
import {Formater} from '@/utils';

interface IProps {
  value: number;
  coin: any;
}

const BuyInSummary = (props: IProps) => {
  const {styles, styleConfig} = useTheme();
  const {value, coin} = props;
  const renderData = useMemo(() => {
    const {user_balance, coin_price} = coin;
    const buyInAmount = Formater.formatAmount(user_balance * (value / 100));
    const buyInVolumn = Formater.fixed(
      parseFloat(buyInAmount) / parseFloat(coin_price),
      4,
    );
    return {
      amount: buyInAmount,
      volumn: buyInVolumn,
    };
  }, [value, coin]);
  const {coin_symbol} = coin;
  return (
    <View
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.bg_foreground,
      ]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        买入汇总
      </Text>
      <View style={[styles.flex_row, styles.items_center, styles.justify_end]}>
        <Text
          style={[
            styles.text_md,
            styles.text_content,
          ]}>{`$${renderData.amount}`}</Text>
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
          ]}>{`${renderData.volumn} ${coin_symbol}`}</Text>
      </View>
    </View>
  );
};

export default BuyInSummary;
