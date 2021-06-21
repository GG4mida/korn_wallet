import React, {useState} from 'react';
import {View} from 'react-native';
import HeaderBack from '@/components/header/back';
import HeaderSubmit from '@/components/header/submit';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';

import {
  CoinDetailSummary,
  CoinDetailMeta,
} from '@/screens/coinDetail/components';

import {SellForm, SellAccount, SellSummary} from './components';

const SellScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const [amount, setAmount] = useState(1);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <HeaderSubmit handlePress={() => null} />,
    });
  }, [navigation, styleConfig]);

  return (
    <View style={[styles.screen_container]}>
      <CoinDetailSummary />
      <CoinDetailMeta />

      <View style={[styles.my_4]}>
        <SellAccount />
        <SellForm value={amount} handleChange={setAmount} />
        <SellSummary />
      </View>
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '卖出',
  screen: SellScreen,
  type: [ScreenType.STACK],
};
