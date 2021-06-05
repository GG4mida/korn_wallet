import React, {useCallback} from 'react';
import useTheme from '@/core/theme';
import DiscoveryGroup from './group';
import {
  IconDiscoveryNew,
  IconDiscoveryTrade,
  IconDiscoveryBye,
  IconDiscoveryTopic,
} from '@/components/icons';
import {useNavigation} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';

const DiscoveryTopic = () => {
  const {styleConfig} = useTheme();

  const navigation = useNavigation();

  const handleBrowserPress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowser.name);
  }, [navigation]);

  const discoveryConfig = {
    title: '文章',
    items: [
      {
        name: '新手入门',
        url: 'https://airdropking.io/en/',
        icon: (
          <IconDiscoveryNew
            width={36}
            height={36}
            fill={styleConfig.color.green}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '如何交易',
        url: 'https://www.airdropster.com/',
        icon: (
          <IconDiscoveryTrade
            width={36}
            height={36}
            fill={styleConfig.color.red}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '远离合约',
        url: 'https://www.airdropster.com/',
        icon: (
          <IconDiscoveryBye
            width={36}
            height={36}
            fill={styleConfig.color.red}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '精选文章',
        url: 'https://www.airdropster.com/',
        icon: (
          <IconDiscoveryTopic
            width={36}
            height={36}
            fill={styleConfig.color.red}
          />
        ),
        handlePress: handleBrowserPress,
      },
    ],
  };

  return <DiscoveryGroup data={discoveryConfig} col={3} />;
};

export default DiscoveryTopic;
