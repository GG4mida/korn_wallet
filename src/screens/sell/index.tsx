import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import HeaderBack from '@/components/header/back';
import HeaderSubmit from '@/components/header/submit';
import {useTheme} from '@/hooks';
import {useDispatch} from 'react-redux';
import {String, Formater, Toaster} from '@/utils';
import {ScreenType, ResponseCode} from '@/constants/enum';

import {
  CoinDetailOverview,
  CoinDetailStatistic,
} from '@/screens/coinDetail/components';
import {useCoin} from '@/hooks';

import {SellForm, SellAccount, SellSummary} from './components';

const DEFAULT_FORM_PERCENT = 100;

const SellScreen = ({navigation, route}: any) => {
  const {styleConfig, styles} = useTheme();
  const [percent, setPercent] = useState(DEFAULT_FORM_PERCENT);

  const {symbol}: any = route.params;
  const coinData = useCoin(symbol);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async () => {
    const {coin_hold_volumn, coin_symbol} = coinData;
    const sellVolumn = Formater.fixed(coin_hold_volumn * (percent / 100), 4);
    if (parseFloat(sellVolumn) <= 0) {
      Toaster.show('卖出数量不能小于0');
      return false;
    }
    const sellRes: any = await dispatch({
      type: 'coin/sell',
      payload: {
        coin: coin_symbol,
        volumn: sellVolumn,
      },
    });
    const {code, content} = sellRes;
    if (code === ResponseCode.SUCCESS) {
      dispatch({
        type: 'user/info',
      });
      dispatch({
        type: 'user/holds',
      });
      Toaster.show(content);
    }
  }, [percent, coinData, dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <HeaderSubmit handlePress={handleSubmit} />,
    });
  }, [navigation, styleConfig, handleSubmit]);

  return (
    <View style={[styles.screen_container]}>
      <CoinDetailOverview />
      <CoinDetailStatistic />
      <View style={[styles.my_4]}>
        <SellAccount coin={coinData} />
        <SellForm value={percent} handleChange={setPercent} />
        <SellSummary value={percent} coin={coinData} />
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
