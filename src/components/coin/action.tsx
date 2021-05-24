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

const CoinAction = (props: IProps) => {
  const {handleBuyInPress, handleSellPress} = props;

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
    const userHoldItem = find(holdList, {coin: symbol});
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
    <View style={tailwind('bg-white border-t border-gray-100 py-5 px-5')}>
      <View
        style={tailwind(
          'flex-row items-center justify-between pb-3 mb-3 border-b border-gray-50',
        )}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓数量：</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {`${Formater.fixed(coinHold.volumn, 4)} ${symbol}`}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓市值：</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {coinHold.amount}
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

export default CoinAction;
