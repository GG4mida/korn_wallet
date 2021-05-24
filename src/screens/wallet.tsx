import React, {useMemo} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import {Formater, DateTime} from '@/utils';

const WalletScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  const {info: userInfo, holds: userHolds} = useSelector(
    (state: any) => state.user,
  );
  const {list: marketList} = useSelector((state: any) => state.market);

  const userSummaryData = useMemo(() => {
    let userHoldAmount = 0;
    const {balance_current, balance_init, createtime} = userInfo;
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
      balanceCurrent: userBalanceCurrent,
      balanceInit: userBalanceInit,
      holdAmount: userHoldAmount,
      totalAmount: userTotalAmount,
      totalProfit: userTotalProfit,
      totalProfitRatio: userTotalProfitRatio,
      createtime: createtime,
    };
  }, [userInfo, marketList, userHolds]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-2')}>
        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>初始资金</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatAmount(userSummaryData.balanceInit)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            新用户账户初始资金
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>累计资产</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatAmount(userSummaryData.totalAmount)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            当前账户累计资产，累计资产 = 账户余额 + 持仓价值
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>账户余额</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatAmount(userSummaryData.balanceCurrent)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            当前账户余额
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>持仓价值</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatAmount(userSummaryData.holdAmount)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            当前持仓的累计价值
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>累计盈利</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatAmount(userSummaryData.totalProfit)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            账户盈利金额
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>盈利率</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>
                {Formater.formatProfitRatio(userSummaryData.totalProfitRatio)}
              </Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>账户盈利率</Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>注册时间</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>
                {DateTime.format(
                  userSummaryData.createtime,
                  DateTime.FORMATER_DATETIME,
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletScreen;
