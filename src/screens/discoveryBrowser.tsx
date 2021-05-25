import React, {useCallback, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {tailwind, getColor} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import {useNavigation} from '@react-navigation/core';
import {RouteConfig} from '@/constants/navigation';

const BrowserItem = (props: any) => {
  const {data} = props;
  const {logo_png, symbol} = data;
  const navigation = useNavigation();
  const handleItemPress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowserItem.name, data);
  }, [navigation, data]);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleItemPress}
      style={tailwind(
        'w-1/3 py-5 px-3 bg-white items-center justify-center mb-3',
      )}>
      <Image
        source={{uri: logo_png}}
        style={tailwind('w-8 h-8 rounded-full mb-2')}
      />
      <Text style={tailwind('text-base text-gray-700')}>{symbol}</Text>
    </TouchableOpacity>
  );
};

const BrowserList = (props: any) => {
  const {data} = props;
  return (
    <View style={tailwind('flex flex-row flex-wrap items-center')}>
      {data.map((coin: any, index: number) => {
        return <BrowserItem data={coin} key={`browser_${index}`} />;
      })}
    </View>
  );
};

const DiscoveryBrowserScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {all: coinList} = useSelector((state: any) => state.coin);
  const loading = useSelector(
    (state: any) => state.loading.effects['coin/all'],
  );

  useEffect(() => {
    if (coinList.length === 0) {
      dispatch({
        type: 'coin/all',
      });
    }
  }, [dispatch, coinList]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

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
      <BrowserList data={coinList} />
    </ScrollView>
  );
};

export default DiscoveryBrowserScreen;
