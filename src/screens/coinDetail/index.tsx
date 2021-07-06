import React, {useState, useLayoutEffect, useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {klineTab} from '@/constants/config';
import {useTheme} from '@/hooks';
import {String} from '@/utils';
import {BuyInScreen, SellScreen} from '@/screens';
import {ScreenType} from '@/constants/enum';
import {
  CoinDetailAction,
  CoinDetailKline,
  CoinDetailKlineBar,
  CoinDetailOverview,
  CoinDetailStatistic,
  CoinDetailFavorite,
  CoinDetailMeta,
} from './components';

const CoinDetailScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const [tab, setTab] = useState(klineTab.DAY);

  const route = useRoute();
  const coin: any = route.params;
  const {name} = coin;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerRight: () => <CoinDetailFavorite />,
    });
  }, [navigation, name, styleConfig]);

  const handleBuyInPress = useCallback(() => {
    navigation.navigate(BuyInScreen.name, coin);
  }, [navigation, coin]);

  const handleSellPress = useCallback(() => {
    navigation.navigate(SellScreen.name, coin);
  }, [navigation, coin]);

  return (
    <View style={[styles.screen_container, styles.bg_foreground]}>
      <ScrollView
        style={[styles.screen_container]}
        showsVerticalScrollIndicator={false}>
        <CoinDetailOverview />
        <CoinDetailStatistic />
        <CoinDetailKlineBar value={tab} onChange={setTab} />
        <CoinDetailKline type={tab} />
        <CoinDetailMeta data={coin} />
      </ScrollView>

      <CoinDetailAction
        handleBuyInPress={handleBuyInPress}
        handleSellPress={handleSellPress}
      />
    </View>
  );
};

export default {
  name: String.getRandomString(),
  title: '行情',
  screen: CoinDetailScreen,
  type: [ScreenType.STACK],
};
