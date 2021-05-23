import React, {useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
// import {Formater} from '@/utils';
// import {IconArrowDown, IconArrowTop} from '@/components/icons';

const HomeSummary = () => {
  const navigation = useNavigation();

  const {info: userInfo, holds: userHolds} = useSelector(
    (state: any) => state.user,
  );
  const {exchange} = useSelector((state: any) => state.exchange);
  const {list: marketList} = useSelector((state: any) => state.market);

  const userSummaryData = useMemo(() => {
    console.info(userInfo);
    console.info(exchange);
    console.info(marketList);
    console.info(userHolds);
  }, [userInfo, exchange, marketList, userHolds]);

  console.info('userProfitData');
  console.info(userSummaryData);

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
      {/* <View style={tailwind('flex flex-row justify-between items-end')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-2xl text-white')}>$</Text>
          <Text style={tailwind('text-2xl text-white font-bold')}>
            {totalAmount}
          </Text>
        </View>

        <View style={tailwind('flex flex-row items-center')}>
          {parseFloat(profit_ratio) >= 0 ? (
            <IconArrowTop width={16} height={16} fill={getColor('white')} />
          ) : (
            <IconArrowDown width={16} height={16} fill={getColor('white')} />
          )}
          <Text style={tailwind('text-lg text-white')}>
            {Formater.formatProfitRatio(profit_ratio)}
          </Text>
        </View>
      </View> */}
    </LinearGradient>
  );
};

export default HomeSummary;
