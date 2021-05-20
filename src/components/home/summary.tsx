import React, {useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind} from '@/core/tailwind';
import {Formater} from '@/utils';

const HomeSummary = () => {
  const dispatch = useDispatch();
  const {full} = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch({
      type: 'user/full',
    });
  }, [dispatch]);

  const {balance_init = 0, profit = 0, profit_ratio = 0} = full;

  const totalAmount = useMemo(() => {
    return Formater.formatAmount(parseFloat(balance_init) + parseFloat(profit));
  }, [balance_init, profit]);

  const profitRatioIcon =
    parseFloat(profit_ratio) >= 0 ? 'arrow-up' : 'arrow-down';

  return (
    <LinearGradient
      colors={['#FF9800', '#F44336']}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl')}>
      <View style={tailwind('flex flex-row items-center justify-between mb-4')}>
        <Text style={tailwind('text-white text-sm')}>账户资产</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={tailwind('text-white text-sm')}>详情</Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind('flex flex-row justify-between items-end')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-2xl text-white italic')}>$</Text>
          <Text style={tailwind('text-2xl text-white font-bold')}>
            {totalAmount}
          </Text>
        </View>

        <View style={tailwind('flex flex-row items-center')}>
          <Icon
            name={profitRatioIcon}
            size={18}
            style={tailwind('text-white')}
          />
          <Text style={tailwind('text-lg text-white')}>
            {Formater.formatProfitRatio(profit_ratio)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeSummary;
