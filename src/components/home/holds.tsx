import React, {useCallback, useEffect, useMemo} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteConfig} from '@/constants/navigation';
import {Formater} from '@/utils';
import useTheme from '@/core/theme';
import {IconEmpty, IconArrowRight} from '@/components/icons';

const HomeHoldItem = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  const {coin, volumn, amount} = data;
  const {logo_png, name, symbol} = coin;
  const holdCount = `${Formater.fixed(volumn, 4)} ${symbol}`;

  const navigation = useNavigation();
  const handleItemPress = useCallback(() => {
    navigation.navigate(RouteConfig.CoinDetail.name, data.coin);
  }, [navigation, data]);

  return (
    <TouchableOpacity onPress={handleItemPress} activeOpacity={0.5}>
      <LinearGradient
        colors={[styleConfig.color.background, styleConfig.color.background]}
        style={[styles.rounded_xl, styles.mb_3, styles.p_4]}>
        <View style={[styles.flex_container_between]}>
          <View style={[styles.flex_container_center]}>
            <Image
              source={{uri: logo_png}}
              style={[styles.img_coin, styles.rounded_xl, styles.mr_3]}
            />
            <View>
              <Text style={[styles.text_lg, styles.text_content]}>
                {symbol}
              </Text>
              <Text style={[styles.text_md, styles.text_content_secondary]}>
                {name}
              </Text>
            </View>
          </View>
          <View style={[styles.items_end]}>
            <Text style={[styles.text_content_secondary, styles.text_md]}>
              {holdCount}
            </Text>
            <Text style={[styles.text_content, styles.text_lg]}>
              ${Formater.formatAmount(amount)}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const HomeHoldList = (props: any) => {
  const {data} = props;
  return (
    <React.Fragment>
      {data.map((hold: any, index: number) => {
        return <HomeHoldItem data={hold} key={`hold_${index}`} />;
      })}
    </React.Fragment>
  );
};

const HomeHolds = () => {
  const {styleConfig, styles} = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {holds: userHolds} = useSelector((state: any) => state.user);
  const {list: marketList} = useSelector((state: any) => state.market);

  const loading = useSelector(
    (state: any) => state.loading.effects['user/holds'],
  );

  useEffect(() => {
    dispatch({
      type: 'user/holds',
    });
  }, [dispatch]);

  const userHoldList = useMemo(() => {
    if (!userHolds || userHolds.length === 0) {
      return [];
    }
    const result = [];
    for (const holdItem of userHolds) {
      const {coin, volumn} = holdItem;
      const {symbol} = coin;
      const marketInfo = marketList[symbol];
      if (!marketInfo) {
        continue;
      }
      const {c: marketPrice} = marketInfo;
      const holdAmount = parseFloat(marketPrice) * parseFloat(volumn);
      result.push({
        ...holdItem,
        amount: holdAmount,
      });
    }

    return result;
  }, [userHolds, marketList]);

  if (loading === true) {
    return (
      <View style={[styles.flex_container_center, styles.py_5]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (userHoldList.length === 0) {
    const handleCoinPress = () => {
      const coinAction = TabActions.jumpTo(RouteConfig.Coin.name);
      navigation.dispatch(coinAction);
    };

    return (
      <View style={[styles.flex_container_center, styles.flex_col]}>
        <IconEmpty width={80} height={80} style={[styles.mb_3]} />
        <Text style={[styles.text_md, styles.text_hint, styles.mb_3]}>
          暂无持仓
        </Text>
        <TouchableOpacity
          onPress={handleCoinPress}
          activeOpacity={0.5}
          style={styles.button_green}>
          <Text style={[styles.text_md, styles.text_white]}>
            查看行情，立即添加持仓
          </Text>
          <IconArrowRight
            width={16}
            height={16}
            style={[styles.ml_1]}
            fill={styleConfig.color.white}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.mb_5]}>
      <HomeHoldList data={userHoldList} />
    </View>
  );
};

export default HomeHolds;
