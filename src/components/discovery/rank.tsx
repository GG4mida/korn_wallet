import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {IconDiscoveryRank, IconForward} from '@/components/icons';

const Rank = () => {
  return (
    <LinearGradient
      colors={[getColor('yellow-500'), getColor('red-500')]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl bg-white mb-4')}>
      <View style={tailwind('flex flex-row items-center justify-between')}>
        <View style={tailwind('flex flex-row items-center')}>
          <IconDiscoveryRank
            width={32}
            height={32}
            fill={getColor('red-100')}
            style={tailwind('mr-3')}
          />
          <View>
            <Text style={tailwind('text-white text-lg')}>排行榜</Text>
            <Text style={tailwind('text-gray-100 text-base')}>
              盈利实时更新，英雄榜上有名
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

export default Rank;
