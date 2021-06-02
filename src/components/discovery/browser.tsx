import React, {useCallback} from 'react';
import {RouteConfig} from '@/constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {IconDiscoveryBrowser} from '@/components/icons';
import DiscoveryItem from './item';
import useTheme from '@/core/theme';

const DiscoveryBrowser = () => {
  const {styleConfig} = useTheme();
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowser.name);
  }, [navigation]);

  const config = {
    title: '区块浏览器',
    descr: '区块链上信息浏览及查询',
    colors: [styleConfig.color.gray_500, styleConfig.color.green],
    icon: (
      <IconDiscoveryBrowser
        width={32}
        height={32}
        fill={styleConfig.color.gray_100}
      />
    ),
    handlePress: handlePress,
  };
  return <DiscoveryItem {...config} />;
};

export default DiscoveryBrowser;
