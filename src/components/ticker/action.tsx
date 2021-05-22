import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {find} from 'lodash';
import {useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formater} from '@/utils';
import {tailwind} from '@/core/tailwind';

interface IProps {
  handleBuyInPress: () => void;
  handleSellPress: () => void;
}

const TickerAction = (props: IProps) => {
  const {handleBuyInPress, handleSellPress} = props;

  const route = useRoute();
  const ticker: any = route.params;
  const {
    basic: {symbol},
  } = ticker;
  const {holds} = useSelector((state: any) => state.user);

  const tickerHold = useMemo(() => {
    const result = {
      volumn: 0,
      amount: '0.00',
    };

    if (!holds || holds.length === 0) {
      return result;
    }
    const holdItem = find(holds, {coin: symbol});
    if (!holdItem) {
      return result;
    }

    const {volumn, meta} = holdItem;

    const {c: price} = meta;

    result.volumn = volumn;
    result.amount = Formater.formatAmount(
      parseFloat(price) * parseFloat(volumn),
    );

    return result;
  }, [symbol, holds]);

  return (
    <View style={tailwind('bg-white border-t border-gray-100 py-5 px-5')}>
      <View
        style={tailwind(
          'flex-row items-center justify-between pb-3 mb-3 border-b border-gray-50',
        )}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓数量：</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {`${Formater.fixed(tickerHold.volumn, 4)} ${symbol}`}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓市值：</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {tickerHold.amount}
          </Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <TouchableOpacity
          style={tailwind(
            'flex-1 items-center px-6 py-2 bg-yellow-500 rounded-3xl mr-2',
          )}
          onPress={handleBuyInPress}
          activeOpacity={0.5}>
          <Text style={tailwind('text-white text-base')}>买入</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            'flex-1 items-center px-6 py-2 bg-pink-500 rounded-3xl',
          )}
          onPress={handleSellPress}
          activeOpacity={0.5}>
          <Text style={tailwind('text-white text-base')}>卖出</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TickerAction;
