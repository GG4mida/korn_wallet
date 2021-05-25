import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {IconDiscoveryBinance, IconForward} from '@/components/icons';

const Binance = () => {
  return (
    <LinearGradient
      colors={[getColor('gray-500'), getColor('green-500')]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl bg-white mb-4')}>
      <View style={tailwind('flex flex-row items-center justify-between')}>
        <View style={tailwind('flex flex-row items-center')}>
          <IconDiscoveryBinance
            width={32}
            height={32}
            fill={getColor('green-200')}
            style={tailwind('mr-3')}
          />
          <View>
            <Text style={tailwind('text-white text-lg')}>币安（binance）</Text>
            <Text style={tailwind('text-gray-100 text-base')}>
              领先的数字货币交易平台
            </Text>
          </View>
        </View>
        <View>
          <IconForward width={18} height={18} fill={getColor('gray-100')} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Binance;
