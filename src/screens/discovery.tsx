import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '@/styles';
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
      style={styles.screen_container_with_padding}>
      <DiscoveryReminder />
      <DiscoveryBrowser />
      <DiscoveryRank />
      <DiscoveryBinance />
    </ScrollView>
  );
};

export default DiscoveryScreen;
