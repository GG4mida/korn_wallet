import React from 'react';
import {ScrollView} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {Rank, Binance, Browser, Reminder} from '@/components/discovery';

const DiscoveryScreen = ({}: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <Reminder />
      <Browser />
      <Rank />
      <Binance />
    </ScrollView>
  );
};

export default DiscoveryScreen;
