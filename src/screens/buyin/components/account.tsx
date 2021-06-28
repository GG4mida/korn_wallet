import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/hooks';
import {Formater} from '@/utils';

const BuyInAccountItem = (props: {text: string; value: string}) => {
  const {styles} = useTheme();
  const {text, value} = props;
  return (
    <View
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.border_b,
      ]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        {text}
      </Text>
      <View style={[styles.flex_row, styles.items_center, styles.justify_end]}>
        <Text style={[styles.text_md, styles.text_content]}>{value}</Text>
      </View>
    </View>
  );
};

const BuyInAccount = (props: {coin: any}) => {
  const {styles} = useTheme();

  const {coin} = props;

  const renderData = useMemo(() => {
    const {user_balance, coin_price, coin_hold_volumn} = coin;
    const result = {
      volumn: '0',
      amount: '0.00',
      balance: Formater.formatAmount(user_balance),
    };
    result.volumn = Formater.fixed(coin_hold_volumn, 4);
    result.amount = Formater.formatAmount(
      parseFloat(coin_price) * parseFloat(coin_hold_volumn),
    );
    return result;
  }, [coin]);

  const {coin_symbol} = coin;

  return (
    <View style={[styles.mb_3, styles.bg_foreground]}>
      <BuyInAccountItem
        text="当前持仓"
        value={`${renderData.volumn} ${coin_symbol}`}
      />
      <BuyInAccountItem text="持仓市值" value={`$${renderData.amount}`} />
      <BuyInAccountItem text="账户余额" value={`$${renderData.balance}`} />
    </View>
  );
};

export default BuyInAccount;
