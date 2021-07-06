import React, {useState, useCallback, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {HeaderSubmit} from '@/components/header/';
import {useTheme} from '@/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {String, Formater, Toaster} from '@/utils';
import {ScreenType, ResponseCode} from '@/constants/enum';
import {
  CoinDetailOverview,
  CoinDetailStatistic,
} from '@/screens/coinDetail/components';
import {useCoin} from '@/hooks';
import {BuyInForm, BuyInAccount, BuyInSummary} from './components';

const DEFAULT_FORM_PERCENT = 20;
const MIN_BUYIN_AMOUNT = 100;

const BuyInScreen = ({navigation, route}: any) => {
  const {styleConfig, styles} = useTheme();
  const [percent, setPercent] = useState(DEFAULT_FORM_PERCENT);
  const {symbol}: any = route.params;
  const coinData = useCoin(symbol);
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: any) => state.loading.effects['coin/buyin'],
  );

  const handleSubmit = useCallback(async () => {
    const {coin_symbol, user_balance} = coinData;
    const buyInAmount = Formater.formatAmount(user_balance * (percent / 100));
    if (parseFloat(buyInAmount) <= MIN_BUYIN_AMOUNT) {
      Toaster.show(`买入金额不能小于$${MIN_BUYIN_AMOUNT}`);
      return false;
    }
    const buyinRes: any = await dispatch({
      type: 'coin/buyin',
      payload: {
        coin: coin_symbol,
        amount: buyInAmount,
      },
    });
    const {code, content} = buyinRes;
    if (code === ResponseCode.SUCCESS) {
      dispatch({
        type: 'user/info',
      });
      dispatch({
        type: 'user/holds',
      });
      Toaster.show(content);
      navigation.goBack();
    }
  }, [navigation, percent, coinData, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderSubmit handlePress={handleSubmit} loading={loading} />
      ),
    });
  }, [navigation, styleConfig, loading, handleSubmit]);

  return (
    <View style={[styles.screen_container]}>
      <CoinDetailOverview />
      <CoinDetailStatistic />
      <View style={[styles.my_4]}>
        <BuyInAccount coin={coinData} />
        <BuyInForm value={percent} handleChange={setPercent} />
        <BuyInSummary value={percent} coin={coinData} />
      </View>
    </View>
  );
};

export default {
  name: String.getRandomString(),
  title: '买入',
  screen: BuyInScreen,
  type: [ScreenType.STACK],
};
