import React from 'react';
import {styleConfig} from '@/styles';
import {IconDiscoveryRank} from '@/components/icons';
import DiscoveryItem from './item';

const DiscoveryRank = () => {
  const config = {
    title: '排行榜',
    descr: '盈利实时更新，英雄榜上有名',
    colors: [styleConfig.color.yellow, styleConfig.color.red],
    icon: (
      <IconDiscoveryRank
        width={32}
        height={32}
        fill={styleConfig.color.gray_100}
      />
    ),
    handlePress: () => null,
  };
  return <DiscoveryItem {...config} />;
};

export default DiscoveryRank;
