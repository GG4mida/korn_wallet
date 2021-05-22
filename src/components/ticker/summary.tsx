import React from 'react';
import {View, Text, Image} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {Formater} from '@/utils';
import {useRoute} from '@react-navigation/native';

const TickerSummary = () => {
  const route = useRoute();
  const ticker: any = route.params;

  const {basic, meta} = ticker;
  const {name, symbol, logo_png} = basic;
  const {P: change, c: price} = meta;

  const changeStyle =
    parseFloat(change) > 0 ? 'text-red-600' : 'text-green-600';

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
          <Text style={tailwind('text-xs text-gray-600')}>$</Text>
          <Text style={tailwind('text-xs text-gray-600')}>{price}</Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-600')}>$</Text>
          <Text style={tailwind('text-base text-gray-600')}>{price}</Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {Formater.formatTickerChange(change)}
        </Text>
      </View>
    </View>
  );
};

export default TickerSummary;
