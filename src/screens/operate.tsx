import React, {useEffect} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {tailwind, getColor} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import {CoinOpDirection} from '@/constants/enum';
import {Formater} from '@/utils';

const OperateItem = (props: any) => {
  const {data} = props;

  const {operate} = data;

  const {coin_code, volumn, amount, price, direction, createtime} = operate;

  const panelStyle =
    direction === CoinOpDirection.BUYIN
      ? [getColor('yellow-500'), getColor('red-500')]
      : [getColor('gray-500'), getColor('green-500')];

  const operateName = direction === CoinOpDirection.BUYIN ? '买入' : '卖出';

  return (
    <LinearGradient
      colors={panelStyle}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl mb-4')}>
      <View style={tailwind('flex flex-row items-center justify-between mb-4')}>
        <View style={tailwind('flex-row items-center')}>
          <Text style={tailwind('text-white text-lg font-bold mr-2')}>
            {coin_code}
          </Text>
          <Text style={tailwind('text-gray-100 text-sm')}>{operateName}</Text>
        </View>

        <Text style={tailwind('text-gray-200 text-sm')}>{createtime}</Text>
      </View>
      <View style={tailwind('flex flex-row justify-between items-end')}>
        <View style={tailwind('w-1/3')}>
          <Text style={tailwind('text-sm text-gray-200 mb-1')}>数量</Text>
          <Text style={tailwind('text-base text-white')}>
            {Formater.fixed(volumn, 4)}
          </Text>
        </View>
        <View style={tailwind('w-1/3 items-end')}>
          <Text style={tailwind('text-sm text-gray-200 mb-1')}>金额</Text>
          <Text style={tailwind('text-base text-white')}>
            ${Formater.formatAmount(amount)}
          </Text>
        </View>
        <View style={tailwind('w-1/3 items-end')}>
          <Text style={tailwind('text-sm text-gray-200 mb-1')}>价格</Text>
          <Text style={tailwind('text-base text-white')}>
            ${Formater.formatAmount(price)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const OperateList = (props: any) => {
  const {data} = props;
  const dataCount = data.length;

  return (
    <View style={tailwind('mb-5')}>
      <Text style={tailwind('mb-4 text-base text-gray-600 text-center')}>
        累计 {dataCount} 条交易记录
      </Text>
      {data.map((item: any, index: number) => {
        return <OperateItem data={item} key={`operate_${index}`} />;
      })}
    </View>
  );
};

const OperateScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {operates: userOperates} = useSelector((state: any) => state.user);

  const loading = useSelector(
    (state: any) => state.loading.effects['user/operates'],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch({
      type: 'user/operates',
    });
  }, [dispatch]);

  if (loading === true) {
    return (
      <View style={tailwind('flex-1 items-center justify-center')}>
        <ActivityIndicator color={getColor('gray-600')} />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <OperateList data={userOperates} loading={loading} />
    </ScrollView>
  );
};

export default OperateScreen;
