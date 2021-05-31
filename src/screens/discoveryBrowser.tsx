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
import HeaderBack from '@/components/header/back';
import {useNavigation} from '@react-navigation/core';
import {RouteConfig} from '@/constants/navigation';
import {styles, styleConfig} from '@/styles';

const BrowserItem = (props: any) => {
  const {data, index} = props;
  const {logo_png, symbol} = data;
  const navigation = useNavigation();
  const handleItemPress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowserItem.name, data);
  }, [navigation, data]);

  const itemStyle: any = [
    styles.w_1_3,
    styles.p_5,
    styles.bg_browser,
    styles.flex_container_center,
    styles.flex_col,
    styles.border_b,
  ];

  if (index === 0 || index % 3 < 2) {
    itemStyle.push(styles.border_r);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleItemPress}
      style={itemStyle}>
      <Image
        source={{uri: logo_png}}
        style={[styles.img_coin, styles.mb_2, styles.rounded_full]}
      />
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        {symbol}
      </Text>
    </TouchableOpacity>
  );
};

const BrowserList = (props: any) => {
  const {data} = props;
  return (
    <View style={[styles.flex_row, styles.flex_wrap, styles.items_center]}>
      {data.map((coin: any, index: number) => {
        return (
          <BrowserItem data={coin} key={`browser_${index}`} index={index} />
        );
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
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  if (loading === true) {
    return (
      <View style={[styles.flex_1, styles.flex_container_center]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screen_container}>
      <BrowserList data={coinList} />
    </ScrollView>
  );
};

export default DiscoveryBrowserScreen;
