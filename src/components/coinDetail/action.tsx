import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {find} from 'lodash';
import {useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formater} from '@/utils';
import useTheme from '@/core/theme';

interface IProps {
  handleBuyInPress: () => void;
  handleSellPress: () => void;
}

const CoinAction = (props: IProps) => {
  const {handleBuyInPress, handleSellPress} = props;
  const {styles} = useTheme();
  const route = useRoute();
  const coin: any = route.params;
  const {symbol} = coin;
  const {holds: holdList} = useSelector((state: any) => state.user);
  const {list: marketList} = useSelector((state: any) => state.market);

  const coinHold = useMemo(() => {
    const result = {
      volumn: 0,
      amount: '0.00',
    };

    if (!holdList || holdList.length === 0) {
      return result;
    }
    const userHoldItem = find(
      holdList,
      (item: any) => item.coin.symbol === symbol,
    );
    if (!userHoldItem) {
      return result;
    }

    const marketData = marketList[symbol];

    const {volumn} = userHoldItem;
    const {c: price} = marketData;

    result.volumn = volumn;
    result.amount = Formater.formatAmount(
      parseFloat(price) * parseFloat(volumn),
    );

    return result;
  }, [symbol, holdList, marketList]);

  return (
    <View style={[styles.border_t, styles.p_4, styles.bg_foreground]}>
      <View
        style={[
          styles.flex_container_between,
          styles.pb_3,
          styles.mb_3,
          styles.border_b,
        ]}>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            持仓数量：
          </Text>
          <Text style={[styles.text_sm, styles.text_content]}>
            {`${Formater.fixed(coinHold.volumn, 4)} ${symbol}`}
          </Text>
        </View>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            持仓市值：
          </Text>
          <Text style={[styles.text_sm, styles.text_content]}>
            ${coinHold.amount}
          </Text>
        </View>
      </View>
      <View style={[styles.flex_container_between]}>
        <View style={[styles.w_1_2, styles.px_2]}>
          <TouchableOpacity
            style={[styles.button_green, styles.button_sm]}
            onPress={handleBuyInPress}
            activeOpacity={0.5}>
            <Text style={[styles.text_md, styles.text_white]}>买入</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.w_1_2, styles.px_2]}>
          <TouchableOpacity
            style={[styles.button_yellow, styles.button_sm]}
            onPress={handleSellPress}
            activeOpacity={0.5}>
            <Text style={[styles.text_md, styles.text_white]}>卖出</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoinAction;
