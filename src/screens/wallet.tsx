import React, {useMemo} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {Formater, DateTime} from '@/utils';
import {styleConfig, styles} from '@/styles';

const WalletItem = (props: any) => {
  const {label, value, descr, suffix} = props;
  return (
    <View style={[styles.my_2]}>
      <View
        style={[
          styles.flex_container_between,
          styles.bg_foreground,
          styles.px_4,
          styles.py_3,
        ]}>
        <Text style={[styles.text_md, styles.text_content_secondary]}>
          {label}
        </Text>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_md, styles.text_content, styles.text_bold]}>
            {value}
          </Text>
          {suffix ? (
            <Text style={[styles.text_md, styles.text_content]}>{suffix}</Text>
          ) : null}
        </View>
      </View>
      {descr ? (
        <Text
          style={[styles.text_sm, styles.text_hint, styles.mx_4, styles.my_2]}>
          {descr}
        </Text>
      ) : null}
    </View>
  );
};

const WalletScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
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
      style={styles.screen_container}>
      <View style={styles.py_2}>
        <WalletItem
          label="累计资产"
          descr="当前账户累计资产，累计资产 = 账户余额 + 持仓价值"
          value={Formater.formatAmount(userSummaryData.totalAmount)}
          suffix="$"
        />

        <WalletItem
          label="账户余额"
          descr="当前账户余额"
          value={Formater.formatAmount(userSummaryData.balanceCurrent)}
          suffix="$"
        />

        <WalletItem
          label="持仓价值"
          descr="当前持仓的累计价值"
          value={Formater.formatAmount(userSummaryData.holdAmount)}
          suffix="$"
        />

        <WalletItem
          label="累计盈利"
          descr="账户盈利金额"
          value={Formater.formatAmount(userSummaryData.totalProfit)}
          suffix="$"
        />

        <WalletItem
          label="盈利率"
          descr="账户盈利率"
          value={Formater.formatProfitRatio(userSummaryData.totalProfitRatio)}
        />

        <WalletItem
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

export default WalletScreen;
