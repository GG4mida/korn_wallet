import React, {useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {OverViewScreen} from '@/screens';
import {Formater} from '@/utils';
import useTheme from '@/core/theme';

const HomeJumbo = () => {
  const navigation = useNavigation();
  const {styleConfig, styles} = useTheme();
  const {info: userInfo, holds: userHolds} = useSelector(
    (state: any) => state.user,
  );
  const {list: marketList} = useSelector((state: any) => state.market);

  const renderData = useMemo(() => {
    let userHoldAmount = 0;
    const {balance_current, balance_init} = userInfo;
    const userBalanceCurrent = parseFloat(balance_current);
    const userBalanceInit = parseFloat(balance_init);
    if (userHolds && userHolds.length) {
      for (const {coin, volumn} of userHolds) {
        const {symbol} = coin;
        const marketInfo = marketList[symbol];
        if (!marketInfo) {
          continue;
        }
        const {c: marketPrice} = marketInfo;
        userHoldAmount += parseFloat(marketPrice) * parseFloat(volumn);
      }
    }
    const userTotalAmount = userBalanceCurrent + userHoldAmount;
    const userTotalProfit = userTotalAmount - userBalanceInit;
    const userTotalProfitRatio = userTotalProfit / userBalanceInit;
    return {
      totalAmount: userTotalAmount,
      totalProfit: userTotalProfit,
      totalProfitRatio: userTotalProfitRatio,
    };
  }, [userInfo, marketList, userHolds]);

  const handleDetailPress = useCallback(() => {
    navigation.navigate(OverViewScreen.name);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[styleConfig.color.yellow, styleConfig.color.red]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={[styles.p_5, styles.rounded_2xl]}>
      <View style={[styles.flex_container_between, styles.mb_3]}>
        <Text style={[styles.text_white, styles.text_md]}>账户资产</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleDetailPress}>
          <Text style={[styles.text_white, styles.text_md]}>详情</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flex_container_between}>
        <Text style={[styles.text_bold, styles.text_white, styles.text_2xl]}>
          ${Formater.formatAmount(renderData.totalAmount)}
        </Text>
        <View style={styles.flex_container_center}>
          <Text style={[styles.text_white, styles.text_lg]}>
            {Formater.formatProfitRatio(renderData.totalProfitRatio)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeJumbo;
