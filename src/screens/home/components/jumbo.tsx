import React, {useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {WalletScreen} from '@/screens';
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
    navigation.navigate(WalletScreen.name);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[styleConfig.color.yellow, styleConfig.color.red]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={[styles.p_4, styles.rounded_2xl, styles.m_3]}>
      <View style={[styles.flex_container_between, styles.mb_3]}>
        <Text style={[styles.text_white, styles.text_md]}>总市值</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleDetailPress}>
          <Text style={[styles.text_white, styles.text_md]}>详情</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.flex_container_between]}>
        <Text style={[styles.text_bold, styles.text_white, styles.text_3xl]}>
          ¥23,231,12
        </Text>
      </View>

      <View style={customStyle.border} />

      <View style={styles.flex_container_between}>
        <View style={[styles.flex_col, styles.items_center]}>
          <Text style={[styles.text_gray_50, styles.text_sm, styles.mb_1]}>
            今日盈亏
          </Text>
          <Text style={[styles.text_white, styles.text_sm]}>2035.00</Text>
        </View>
        <View style={[styles.flex_col, styles.items_center]}>
          <Text style={[styles.text_gray_50, styles.text_sm, styles.mb_1]}>
            今日盈亏率
          </Text>
          <Text style={[styles.text_white, styles.text_sm]}>+12.32%</Text>
        </View>
        <View style={[styles.flex_col, styles.items_center]}>
          <Text style={[styles.text_gray_50, styles.text_sm, styles.mb_1]}>
            累计盈亏
          </Text>
          <Text style={[styles.text_white, styles.text_sm]}>2035.00</Text>
        </View>
        <View style={[styles.flex_col, styles.items_center]}>
          <Text style={[styles.text_gray_50, styles.text_sm, styles.mb_1]}>
            累计盈亏率
          </Text>
          <Text style={[styles.text_white, styles.text_sm]}>-32.33%</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const customStyle = StyleSheet.create({
  border: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255, 255, 0.1)',
  },
});

export default HomeJumbo;
