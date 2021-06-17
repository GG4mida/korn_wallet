import React, {useState, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {klineTab} from '@/constants/tab';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';
import {
  CoinDetailAction,
  CoinDetailKline,
  CoinDetailKlineBar,
  CoinDetailSummary,
  CoinDetailMeta,
  CoinDetailFavorite,
  CoinDetailBuyIn,
  CoinDetailSell,
} from './components';

const CoinDetailScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const [tab, setTab] = useState(klineTab.DAY);

  const route = useRoute();
  const coin: any = route.params;
  const {name} = coin;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <CoinDetailFavorite />,
    });
  }, [navigation, name, styleConfig]);

  const actionBuyInRef: any = useRef();
  const actionSellRef: any = useRef();

  const handleBuyInPress = () => {
    actionBuyInRef.current.snapTo(0);
  };

  const handleSellPress = () => {
    actionSellRef.current.snapTo(0);
  };

  return (
    <View style={[styles.screen_container, styles.bg_green]}>
      <ScrollView
        style={[styles.screen_container]}
        showsVerticalScrollIndicator={false}>
        <CoinDetailSummary />
        <CoinDetailMeta />
        <CoinDetailKlineBar value={tab} onChange={setTab} />
        <CoinDetailKline type={tab} />
      </ScrollView>
      <CoinDetailAction
        handleBuyInPress={handleBuyInPress}
        handleSellPress={handleSellPress}
      />
      <CoinDetailSell refs={actionSellRef} />
      <CoinDetailBuyIn refs={actionBuyInRef} />
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '行情',
  screen: CoinDetailScreen,
  type: [ScreenType.STACK],
};
