import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Header} from 'react-native-elements';
import {tailwind} from '../core/tailwind';
import { formatChange } from '../utils/formater';

const marketList = [{
  icon: require('../assets/img/btc.png'),
  name: 'BTC',
  label: '比特币',
  change: 23.11,
  price_usd: 2399.33,
  price_cny: 329807.12
}, {
  icon: require('../assets/img/eth.png'),
  name: 'ETH',
  label: '以太坊',
  change: -18.33,
  price_usd: 2399.33,
  price_cny: 329807.12
}, {
  icon: require('../assets/img/trx.png'),
  name: 'TRX',
  label: '波场',
  change: 9.22,
  price_usd: 2399.33,
  price_cny: 329807.12
}];

const HeaderRightComponent = ()=> {
  return (
    <View>
      <Icon name="search"  size={18} color="#222" />
    </View>
  )
}

const MarketItem = (props: any)=> {
  const { market } = props;
  const { icon, name, label, change, price_usd, price_cny } = market;

  let changeIcon, changeStyle;
  if(parseFloat(change) > 0) {
    changeIcon = 'arrow-up';
    changeStyle = 'text-red-600';
  } else {
    changeIcon = 'arrow-down';
    changeStyle = "text-green-600";
  }
  
  return (
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 p-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Image source={icon} style={tailwind('w-6 h-6 rounded-full')} />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-base')}>
            {name}
          </Text>
          <Text style={tailwind('text-gray-600 text-xs')}>
            {label}
          </Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end')}>
        <Text style={tailwind('text-xs text-gray-600')}>$ {price_usd}</Text>
        <Text style={tailwind('text-base text-gray-800')}>¥ {price_cny}</Text>
      </View>

      <View style={tailwind('flex flex-row items-center')}>
        <Icon name={changeIcon} size={16} style={tailwind(changeStyle)}/>
        <Text style={tailwind(`${changeStyle} text-base`)}>{formatChange(market.change)}</Text>
      </View>
    </View>
  )
}

const MarketScreen = ({navigation}: any) => {
  return (
    <View style={tailwind('flex-1')}>
      <Header
        statusBarProps={{barStyle: 'dark-content'}}
        barStyle="dark-content"
        centerComponent={{text: '行情', style: {color: '#222', fontSize: 16}}}
        rightComponent={<HeaderRightComponent />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      />

      <View>
        {
          marketList.map((market: any, index: number)=> <MarketItem key={index} market={market}/>)
        }
      </View>

    </View>
  );
};

export default MarketScreen;
