import React from 'react';
import {styleConfig} from '@/styles';
import {IconDiscoveryBinance} from '@/components/icons';
import DiscoveryItem from './item';

const DiscoveryBinance = () => {
  const config = {
    title: '币安（binance）',
    descr: '领先的数字货币交易平台',
    colors: [styleConfig.color.gray, styleConfig.color.green],
    icon: (
      <IconDiscoveryBinance
        width={32}
        height={32}
        fill={styleConfig.color.light}
      />
    ),
    handlePress: () => null,
  };
  return <DiscoveryItem {...config} />;
};

export default DiscoveryBinance;
