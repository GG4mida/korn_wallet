import React, {useCallback} from 'react';
import {styleConfig} from '@/styles';
import {RouteConfig} from '@/constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {IconDiscoveryBrowser} from '@/components/icons';
import DiscoveryItem from './item';

const DiscoveryBrowser = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowser.name);
  }, [navigation]);

  const config = {
    title: '区块浏览器',
    descr: '区块链上信息浏览及查询',
    colors: [styleConfig.color.gray, styleConfig.color.green],
    icon: (
      <IconDiscoveryBrowser
        width={32}
        height={32}
        fill={styleConfig.color.light}
      />
    ),
    handlePress: handlePress,
  };
  return <DiscoveryItem {...config} />;
};

export default DiscoveryBrowser;
