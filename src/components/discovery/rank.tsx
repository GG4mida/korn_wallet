import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {IconDiscoveryRank} from '@/components/icons';

const Rank = () => {
  return (
    <LinearGradient
      colors={[getColor('gray-100'), getColor('gray-100')]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl bg-white mb-4')}>
      <View style={tailwind('flex flex-row items-center')}>
        <IconDiscoveryRank width={48} height={48} style={tailwind('mr-3')} />
        <View>
          <Text style={tailwind('text-gray-700 text-lg')}>排行榜</Text>
          <Text style={tailwind('text-gray-600 text-base')}>
            盈利实时更新，英雄榜上有名
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Rank;
