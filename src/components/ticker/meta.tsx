import React from 'react';
import {View, Text} from 'react-native';
import {Formater} from '@/utils';
import {tailwind} from '@/core/tailwind';
import {useRoute} from '@react-navigation/native';

const TickerMeta = () => {
  const route = useRoute();

  const data: any = route.params;
  const {meta} = data;
  const {h: dayHigh, l: dayLow, n: dayCount, v: dayVolumn} = meta;

  const dayCountData: any = Formater.formatBigNumber(dayCount);
  const dayVolumnData: any = Formater.formatBigNumber(dayVolumn);

  return (
    <View
      style={tailwind(
        'flex flex-row items-center flex-wrap justify-between bg-white border-b border-gray-50 p-2',
      )}>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h最高</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>{dayHigh}</Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h成交量</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayCountData.value}
          </Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayCountData.unit}
          </Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h最低</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>{dayLow}</Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h成交额</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayVolumnData.value}
          </Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayVolumnData.unit}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TickerMeta;
