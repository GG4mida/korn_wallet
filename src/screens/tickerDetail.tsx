import React, {useState, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {klineTab} from '@/constants/tab';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

import {
  TickerAction,
  TickerKline,
  TickerKlineBar,
  TickerSummary,
  TickerMeta,
  TickerFavorite,
  TickerBuyInPanel,
  TickerSellPanel,
} from '@/components/ticker';

const TickerDetailScreen = ({navigation}: any) => {
  const [tab, setTab] = useState(klineTab.DAY);

  const route = useRoute();
  const ticker: any = route.params;
  const {
    basic: {name},
  } = ticker;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerBackTitleStyle: tailwind('text-gray-600'),
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <TickerFavorite />,
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
        <TickerSummary />
        <TickerMeta />
        <TickerKlineBar value={tab} onChange={setTab} />
        <TickerKline type={tab} />
      </ScrollView>

      <TickerAction
        handleBuyInPress={handleBuyInPress}
        handleSellPress={handleSellPress}
      />

      <TickerSellPanel refs={actionSellRef} />
      <TickerBuyInPanel refs={actionBuyInRef} />
    </View>
  );
};

export default TickerDetailScreen;
