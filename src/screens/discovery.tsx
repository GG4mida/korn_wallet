import React from 'react';
import {ScrollView} from 'react-native';
import useTheme from '@/core/theme';
import {
  DiscoveryTools,
  DiscoveryAirDrop,
  DiscoveryTopic,
} from '@/components/discovery';

const DiscoveryScreen = ({}: any) => {
  const {styles} = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screen_container}>
      <DiscoveryTopic />
      <DiscoveryTools />
      <DiscoveryAirDrop />
    </ScrollView>
  );
};

export default DiscoveryScreen;
