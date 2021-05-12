import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import {formatChange} from '@/utils/formater';
import SortSvg from '@/assets/svg/sort.svg';

const marketList = [
  {
    icon: require('../assets/img/btc.png'),
    name: 'BTC',
    label: '比特币',
    change: 23.11,
    price_usd: 2399.33,
    price_cny: 329807.12,
  },
  {
    icon: require('../assets/img/eth.png'),
    name: 'ETH',
    label: '以太坊',
    change: -18.33,
    price_usd: 2399.33,
    price_cny: 329807.12,
  },
  {
    icon: require('../assets/img/trx.png'),
    name: 'TRX',
    label: '波场',
    change: 9.22,
    price_usd: 2399.33,
    price_cny: 329807.12,
  },
];

const MarketItem = (props: any) => {
  const {market} = props;
  const {icon, name, label, change, price_usd, price_cny} = market;

  let changeIcon, changeStyle;
  if (parseFloat(change) > 0) {
    changeIcon = 'arrow-up';
    changeStyle = 'text-red-600';
  } else {
    changeIcon = 'arrow-down';
    changeStyle = 'text-green-600';
  }

  return (
    <TouchableOpacity
      onPress={() => null}
      activeOpacity={0.5}
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 px-5 py-3',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Image source={icon} style={tailwind('w-6 h-6 rounded-full')} />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-lg')}>{name}</Text>
          <Text style={tailwind('text-gray-500 text-xs')}>{label}</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end w-1/3')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-xs text-gray-600 italic mr-1')}>$</Text>
          <Text style={tailwind('text-xs text-gray-600')}>{price_usd}</Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-800 italic mr-1')}>$</Text>
          <Text style={tailwind('text-base text-gray-800')}>{price_cny}</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-row items-center')}>
        <Icon name={changeIcon} size={16} style={tailwind(changeStyle)} />
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {formatChange(market.change)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TickerList = () => {
  return (
    <View>
      {marketList.map((market: any, index: number) => (
        <MarketItem key={index} market={market} />
      ))}
    </View>
  );
};

const TickerTabs = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-center bg-gray-50 border-b border-gray-100 p-3',
      )}>
      <View
        style={tailwind(
          'flex flex-row bg-white border border-gray-100 rounded-3xl',
        )}>
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind(
            'w-20 py-2 px-3 bg-red-500 rounded-3xl flex flex-row items-center justify-center',
          )}>
          <Text style={tailwind('text-white')}>自选</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind(
            'w-20 py-2 px-3 flex flex-row items-center justify-center',
          )}>
          <Text style={tailwind('text-gray-700')}>所有</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TickerHeader = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-between bg-white border-b border-gray-100 px-5 py-2',
      )}>
      <TouchableOpacity
        onPress={() => null}
        activeOpacity={0.5}
        style={tailwind('flex flex-1 flex-row items-center')}>
        <Text style={tailwind('text-sm text-gray-500')}>币种</Text>
        <SortSvg fill={getColor('gray-400')} width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => null}
        activeOpacity={0.5}
        style={tailwind('flex flex-1 flex-row items-center justify-end')}>
        <Text style={tailwind('text-sm text-gray-500')}>价格</Text>
        <SortSvg fill={getColor('gray-400')} width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => null}
        activeOpacity={0.5}
        style={tailwind('flex flex-1 flex-row items-center justify-end')}>
        <Text style={tailwind('text-sm text-gray-500')}>涨跌幅</Text>
        <SortSvg fill={getColor('gray-400')} width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
};

const TickerScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <TickerTabs />
      <TickerHeader />
      <TickerList />
    </View>
  );
};

export default TickerScreen;
