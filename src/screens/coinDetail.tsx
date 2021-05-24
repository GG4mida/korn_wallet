import React, {useState, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {klineTab} from '@/constants/tab';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

import {
  CoinAction,
  CoinKline,
  CoinKlineBar,
  CoinSummary,
  CoinMeta,
  CoinFavorite,
  CoinBuyInPanel,
  CoinSellPanel,
} from '@/components/coin';

const CoinDetailScreen = ({navigation}: any) => {
  const [tab, setTab] = useState(klineTab.DAY);

  const route = useRoute();
  const coin: any = route.params;
  const {name} = coin;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <CoinFavorite />,
    });
  }, [navigation, name]);

  const actionBuyInRef: any = useRef();
  const actionSellRef: any = useRef();

  const handleBuyInPress = () => {
    actionBuyInRef.current.snapTo(0);
  };

  const handleSellPress = () => {
    actionSellRef.current.snapTo(0);
  };

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <ScrollView
        style={tailwind('flex-1')}
        showsVerticalScrollIndicator={false}>
        <CoinSummary />
        <CoinMeta />
        <CoinKlineBar value={tab} onChange={setTab} />
        <CoinKline type={tab} />
      </ScrollView>

      <CoinAction
        handleBuyInPress={handleBuyInPress}
        handleSellPress={handleSellPress}
      />

      <CoinSellPanel refs={actionSellRef} />
      <CoinBuyInPanel refs={actionBuyInRef} />
    </View>
  );
};

export default CoinDetailScreen;
