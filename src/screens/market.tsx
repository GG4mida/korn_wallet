import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import {formatChange} from '@/utils/formater';
import ScreenHeader from '@/components/common/screenHeader';
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

const HeaderRightComponent = () => {
  return (
    <View style={tailwind('flex flex-row items-center')}>
      <Icon name="search" size={18} color={getColor('gray-600')} />
    </View>
  );
};

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
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 p-4',
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
    </View>
  );
};

const MarketScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-white')}>
      <ScreenHeader title="行情" rightComponent={<HeaderRightComponent />} />
      <View
        style={tailwind(
          'flex flex-row items-center justify-between border-b border-gray-100 px-4 py-2',
        )}>
        <View style={tailwind('flex flex-1 flex-row items-center')}>
          <Text style={tailwind('text-sm text-gray-500')}>币种</Text>
          <SortSvg fill={getColor('gray-400')} width={16} height={16} />
        </View>
        <View style={tailwind('flex flex-1 flex-row items-center justify-end')}>
          <Text style={tailwind('text-sm text-gray-500')}>价格</Text>
          <SortSvg fill={getColor('gray-400')} width={16} height={16} />
        </View>
        <View style={tailwind('flex flex-1 flex-row items-center justify-end')}>
          <Text style={tailwind('text-sm text-gray-500')}>涨跌幅</Text>
          <SortSvg fill={getColor('gray-400')} width={16} height={16} />
        </View>
      </View>
      <View>
        {marketList.map((market: any, index: number) => (
          <MarketItem key={index} market={market} />
        ))}
      </View>
    </View>
  );
};

export default MarketScreen;
