import React from 'react';
import {ScrollView} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {
  DiscoveryRank,
  DiscoveryBinance,
  DiscoveryBrowser,
  DiscoveryReminder,
} from '@/components/discovery';

const DiscoveryScreen = ({}: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <DiscoveryReminder />
      <DiscoveryBrowser />
      <DiscoveryRank />
      <DiscoveryBinance />
    </ScrollView>
  );
};

export default DiscoveryScreen;
