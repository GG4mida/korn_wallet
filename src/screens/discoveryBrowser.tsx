import React, {useCallback, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {useNavigation} from '@react-navigation/core';
import {RouteConfig} from '@/constants/navigation';
import useTheme from '@/core/theme';

const BrowserItem = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  const {logo_png, symbol, explorer} = data;
  const navigation = useNavigation();
  const handleItemPress = useCallback(() => {
    const params = {
      title: symbol,
      url: explorer,
    };
    navigation.navigate(RouteConfig.WebView.name, params);
  }, [navigation, symbol, explorer]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleItemPress}
      style={[
        styles.px_4,
        styles.py_3,
        styles.flex_container_between,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Image
          source={{uri: logo_png}}
          style={[styles.img_coin, styles.mr_3, styles.rounded_full]}
        />
        <View style={[styles.justify_center, styles.flex_1]}>
          <Text style={[styles.text_md, styles.text_content]}>{symbol}</Text>
          <Text
            style={[styles.text_sm, styles.text_content_secondary]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {explorer}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const DiscoveryBrowserScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
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
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  if (loading === true) {
    return (
      <View style={[styles.flex_1, styles.flex_container_center]}>
        <ActivityIndicator />
      </View>
    );
  }

  const renderCoinItem = (prop: any) => {
    const {item} = prop;
    return <BrowserItem data={item} />;
  };

  return (
    <FlatList
      data={coinList}
      renderItem={renderCoinItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.symbol}
      style={[styles.screen_container]}
    />
  );
};

export default DiscoveryBrowserScreen;
