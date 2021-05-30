import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {tailwind} from '@/core/tailwind';
import {Formater} from '@/utils';
import {RouteConfig} from '@/constants/navigation';

const CoinItem = (props: any) => {
  const {data} = props;
  const {name, symbol, logo_png, priceUSD, priceCNY, change} = data;

  const changeStyle =
    parseFloat(change) > 0 ? 'text-red-600' : 'text-green-600';

  const navigation = useNavigation();
  const handleItemPress = (item: any) => {
    navigation.navigate(RouteConfig.CoinDetail.name, item);
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemPress(data)}
      activeOpacity={0.5}
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-50 px-5 py-3',
      )}>
      <View style={tailwind('flex flex-row w-1/3 items-center')}>
        <Image
          source={{uri: logo_png}}
          style={tailwind('w-6 h-6 rounded-full')}
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
            {Formater.formatAmount(priceCNY)}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-800')}>$</Text>
          <Text style={tailwind('text-base text-gray-800')}>
            {Formater.formatAmount(priceUSD)}
          </Text>
        </View>
      </View>

      <View style={tailwind('flex flex-row w-1/3 items-center justify-end')}>
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {Formater.formatChange(change)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;
