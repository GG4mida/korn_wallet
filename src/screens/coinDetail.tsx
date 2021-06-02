import React, {useState, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {klineTab} from '@/constants/tab';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {
  CoinAction,
  CoinKline,
  CoinKlineBar,
  CoinSummary,
  CoinMeta,
  CoinFavorite,
  CoinBuyInPanel,
  CoinSellPanel,
} from '@/components/coinDetail';

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
      headerRight: () => <CoinFavorite />,
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
