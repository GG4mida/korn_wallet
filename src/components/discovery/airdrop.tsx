import React, {useCallback} from 'react';
import useTheme from '@/core/theme';
import DiscoveryGroup from './group';
import {useNavigation} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';
import Avatar from '@/components/avatar';

const DiscoveryAirDrop = () => {
  const {styleConfig} = useTheme();

  const navigation = useNavigation();

  const handleItemPress = useCallback(
    data => {
      const params = {
        title: data.name,
        url: data.url,
      };
      navigation.navigate(RouteConfig.WebView.name, params);
    },
    [navigation],
  );

  const discoveryConfig = {
    title: '空投',
    items: [
      {
        name: 'AirdropKing',
        url: 'https://airdropking.io/en/',
        icon: <Avatar text="AirdropKing" color={styleConfig.color.red} />,
      },
      {
        name: 'Airdropster',
        url: 'https://www.airdropster.com/',
        icon: <Avatar text="Airdropster" color={styleConfig.color.yellow} />,
      },
      {
        name: 'CryptoCreed',
        url: 'https://cryptocreed.com/airdrop/',
        icon: <Avatar text="CryptoCreed" color={styleConfig.color.blue} />,
      },
      {
        name: 'EtherScan',
        url: 'https://etherscan.io/airdrop',
        icon: <Avatar text="EtherScan" color={styleConfig.color.green} />,
      },
    ],
  };

  return (
    <DiscoveryGroup
      handlePress={handleItemPress}
      data={discoveryConfig}
      col={3}
    />
  );
};

export default DiscoveryAirDrop;
