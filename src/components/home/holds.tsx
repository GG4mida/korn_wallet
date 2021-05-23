import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {tailwind, getColor} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
import styles from '@/core/styles';
import {Formater} from '@/utils';
import EmptySvg from '@/assets/svg/empty.svg';

const HomeHolds = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {holds} = useSelector((state: any) => state.user);

  const loading = useSelector(
    (state: any) => state.loading.effects['user/holds'],
  );

  useEffect(() => {
    dispatch({
      type: 'user/holds',
    });
  }, [dispatch]);

  const handleItemPress = (item: any) => {
    navigation.navigate(RouteConfig.TickerDetail.name, item);
  };

  if (loading === true) {
    return (
      <View style={tailwind('flex flex-col items-center justify-center py-8')}>
        <ActivityIndicator />
      </View>
    );
  }

  if (holds.length === 0) {
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
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={tailwind('mb-5')}>
      {holds.map((hold: any, index: number) => {
        const {coin, volumn, meta, basic} = hold;
        const {c: price} = meta;
        const {logo_png, name} = basic;
        const holdAmount = Formater.formatAmount(
          parseFloat(price) * parseFloat(volumn),
        );
        const holdCount = `${Formater.fixed(volumn, 4)} ${coin}`;
        return (
          <TouchableOpacity
            onPress={() => handleItemPress(hold)}
            activeOpacity={0.5}
            key={index}>
            <LinearGradient
              colors={[getColor('gray-100'), getColor('gray-100')]}
              style={tailwind('p-5 rounded-xl mb-3')}>
              <View style={tailwind('flex flex-row justify-between')}>
                <View style={tailwind('flex items-center flex-row')}>
                  <Image
                    source={{uri: logo_png}}
                    style={tailwind('w-8 h-8 mr-3 rounded-full')}
                  />
                  <View>
                    <Text style={tailwind('text-gray-600 text-xl')}>
                      {coin}
                    </Text>
                    <Text style={tailwind('text-gray-500 text-sm')}>
                      {name}
                    </Text>
                  </View>
                </View>
                <View style={tailwind('items-end')}>
                  <Text style={tailwind('text-gray-600 text-sm')}>
                    {holdCount}
                  </Text>
                  <View style={tailwind('flex flex-row items-center')}>
                    <Text style={tailwind('text-gray-800 text-xl')}>$</Text>
                    <Text style={tailwind('text-gray-800 text-xl')}>
                      {holdAmount}
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

export default HomeHolds;
