import React, {useCallback} from 'react';
import {useTheme} from '@/hooks';
import DiscoveryGroup from './group';
import {
  IconDiscoveryBinance,
  IconDiscoveryBrowser,
  IconDiscoveryImToken,
} from '@/components/icons';
import {useNavigation} from '@react-navigation/native';
import {WebviewScreen, DiscoveryBrowserScreen} from '@/screens';

const DiscoveryTools = () => {
  const {styleConfig} = useTheme();
  const navigation = useNavigation();
  const handleItemPress = useCallback(
    data => {
      const params = {
        title: data.name,
        url: data.url,
      };
      navigation.navigate(WebviewScreen.name, params);
    },
    [navigation],
  );
  const handleBrowserPress = useCallback(() => {
    navigation.navigate(DiscoveryBrowserScreen.name);
  }, [navigation]);
  const discoveryConfig = {
    title: '工具',
    items: [
      {
        name: '区块浏览器',
        icon: (
          <IconDiscoveryBrowser
            width={36}
            height={36}
            fill={styleConfig.color.green}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '币安(Binance)',
        url: 'https://accounts.binancezh.sh/zh-CN/register?ref=19397276',
        icon: (
          <IconDiscoveryBinance
            width={36}
            height={36}
            fill={styleConfig.color.red}
          />
        ),
      },
      {
        name: '钱包(imToken)',
        url: 'https://token.im/download',
        icon: (
          <IconDiscoveryImToken
            width={36}
            height={36}
            fill={styleConfig.color.yellow}
          />
        ),
      },
    ],
  };
  return (
    <DiscoveryGroup
      data={discoveryConfig}
      col={3}
      handlePress={handleItemPress}
    />
  );
};

export default DiscoveryTools;
