import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Formater, DateTime, String} from '@/utils';
import {useTheme} from '@/hooks';
import {ScreenType} from '@/constants/enum';
import {OverViewItem, OverViewJumbo} from './components';

const OverViewScreen = ({}: any) => {
  const {styles} = useTheme();

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
      style={styles.screen_container}>
      <OverViewJumbo data={userSummaryData} />
      <View style={styles.py_2}>
        <OverViewItem
          label="累计盈亏"
          value={`${Formater.formatAmount(userSummaryData.totalProfit)}$`}
        />
        <OverViewItem
          label="累计盈亏率"
          value={Formater.formatProfitRatio(userSummaryData.totalProfitRatio)}
        />
        <OverViewItem
          label="注册时间"
          value={DateTime.format(
            userSummaryData.createtime,
            DateTime.FORMATER_DATETIME,
          )}
        />
      </View>
    </ScrollView>
  );
};

export default {
  name: String.getRandomString(),
  title: '账户详情',
  screen: OverViewScreen,
  type: [ScreenType.STACK],
};
