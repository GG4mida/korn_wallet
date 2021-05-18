import React, {useEffect} from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
import styles from '@/core/styles';
import {Formater} from '@/utils';
import EmptySvg from '@/assets/svg/empty.svg';

const UserProfile = (props: any) => {
  const {data} = props;
  const {balance_current = 0, profit_ratio = 0} = data;

  return (
    <LinearGradient
      colors={['#FF9800', '#F44336']}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={tailwind('p-6 rounded-xl')}>
      <View style={tailwind('flex flex-row justify-between mb-4')}>
        <Text style={tailwind('text-white')}>账户金额</Text>
      </View>
      <View style={tailwind('flex flex-row justify-between items-end')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-2xl text-white italic mr-1')}>$</Text>
          <Text style={tailwind('text-2xl text-white font-bold')}>
            {Formater.formatAmount(balance_current)}
          </Text>
        </View>

        <View style={tailwind('flex flex-row items-center')}>
          <Icon name="arrow-up" size={18} style={tailwind('text-white mr-1')} />
          <Text style={tailwind('text-lg text-white')}>
            {Formater.formatProfitRatio(profit_ratio)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const SectionHeader = (props: any) => {
  const {data} = props;
  return (
    <View
      style={tailwind('mt-8 mb-5 flex flex-row justify-between items-center')}>
      <Text style={tailwind('text-xl text-gray-700')}>持仓</Text>
      {data && data.length ? (
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-yellow-500 mr-1')}>
            交易记录
          </Text>
          <Icon name="arrow-right" size={18} color={getColor('yellow-500')} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const UserHolds = (props: any) => {
  const {data, navigation} = props;
  if (data.length === 0) {
    const handleTickerPress = () => {
      const tickerAction = TabActions.jumpTo(RouteConfig.Ticker.name);
      navigation.dispatch(tickerAction);
    };

    return (
      <View style={tailwind('flex flex-col items-center justify-center py-8')}>
        <EmptySvg width={80} height={80} style={tailwind('mb-3')} />
        <Text style={tailwind('mb-5 text-base text-gray-400 text-center')}>
          暂无持仓
        </Text>
        <TouchableOpacity
          onPress={handleTickerPress}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={tailwind('text-base text-white mr-1')}>
            查看行情，立即添加持仓
          </Text>
          <Icon name="arrow-right" size={18} color={getColor('white')} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={tailwind('mb-5')}>
      {data.map((hold: any, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.5}
            key={index}>
            <LinearGradient
              colors={[getColor('gray-100'), getColor('gray-100')]}
              style={tailwind('p-5 rounded-xl mb-3')}>
              <View style={tailwind('flex flex-row justify-between')}>
                <View style={tailwind('flex items-center flex-row')}>
                  <Image
                    source={require('../assets/img/btc.png')}
                    style={tailwind('w-8 h-8 mr-3 rounded-full')}
                  />
                  <Text style={tailwind('text-gray-800 text-xl')}>BTC</Text>
                </View>
                <View style={tailwind('items-end')}>
                  <Text style={tailwind('text-gray-600 text-base')}>33.12</Text>
                  <View style={tailwind('flex flex-row items-center')}>
                    <Text style={tailwind('text-gray-800 text-lg italic mr-1')}>
                      $
                    </Text>
                    <Text style={tailwind('text-gray-800 text-xl')}>
                      321321
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const {full, holds} = useSelector((state: any) => state.user);

  const loadingFull = useSelector(
    (state: any) => state.loading.effects['user/full'],
  );
  const loadingHolds = useSelector(
    (state: any) => state.loading.effects['user/holds'],
  );

  useEffect(() => {
    dispatch({
      type: 'user/full',
    });

    dispatch({
      type: 'user/holds',
    });
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <UserProfile data={full} loading={loadingFull} />
      <SectionHeader data={holds} />
      <UserHolds data={holds} loading={loadingHolds} navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
