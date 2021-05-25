import React, {useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
import {Formater} from '@/utils';
import {IconArrowDown, IconArrowTop} from '@/components/icons';

const HomeJumbo = () => {
  const navigation = useNavigation();
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

  const handleWalletPress = useCallback(() => {
    navigation.navigate(RouteConfig.Wallet.name);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[getColor('yellow-500'), getColor('red-500')]}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl')}>
      <View style={tailwind('flex flex-row items-center justify-between mb-4')}>
        <Text style={tailwind('text-white text-base')}>账户资产</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleWalletPress}>
          <Text style={tailwind('text-white text-base')}>详情</Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind('flex flex-row justify-between items-end')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-2xl text-white')}>$</Text>
          <Text style={tailwind('text-2xl text-white font-bold')}>
            {Formater.formatAmount(renderData.totalAmount)}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          {renderData.totalProfit >= 0 ? (
            <IconArrowTop width={16} height={16} fill={getColor('white')} />
          ) : (
            <IconArrowDown width={16} height={16} fill={getColor('white')} />
          )}
          <Text style={tailwind('text-lg text-white ml-1')}>
            {Formater.formatProfitRatio(renderData.totalProfitRatio)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeJumbo;
