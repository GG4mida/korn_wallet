import React from 'react';
import {View, Text, Image} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {Formater} from '@/utils';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CoinSummary = () => {
  const route = useRoute();
  const coin: any = route.params;
  const {name, symbol, logo_png} = coin;
  const {list: marketList} = useSelector((state: any) => state.market);
  const {exchange} = useSelector((state: any) => state.exchange);
  const marketInfo = marketList[symbol];
  const {c: marketPrice, P: marketChange} = marketInfo;
  const marketPriceCNY = parseFloat(marketPrice) * parseFloat(exchange);

  const changeStyle =
    parseFloat(marketChange) > 0 ? 'text-red-600' : 'text-green-600';

  return (
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-50 px-5 py-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Image
          source={{uri: logo_png}}
          style={tailwind('w-8 h-8 rounded-full')}
        />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-lg')}>{symbol}</Text>
          <Text style={tailwind('text-gray-500 text-xs')}>{name}</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end w-1/3')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-xs text-gray-600')}>¥</Text>
          <Text style={tailwind('text-xs text-gray-600')}>
            {Formater.formatAmount(marketPriceCNY)}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-600')}>$</Text>
          <Text style={tailwind('text-base text-gray-600')}>
            {Formater.formatAmount(marketPrice)}
          </Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {Formater.formatChange(marketChange)}
        </Text>
      </View>
    </View>
  );
};

export default CoinSummary;
