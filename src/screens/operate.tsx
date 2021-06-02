import React, {useEffect} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {CoinOpDirection} from '@/constants/enum';
import {Formater} from '@/utils';
import useTheme from '@/core/theme';

const OperateItem = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  const {operate} = data;
  const {coin_code, volumn, amount, price, direction} = operate;
  const panelStyle =
    direction === CoinOpDirection.BUYIN
      ? [styleConfig.color.yellow, styleConfig.color.red]
      : [styleConfig.color.gray_500, styleConfig.color.green];
  const operateName = direction === CoinOpDirection.BUYIN ? '买入' : '卖出';
  return (
    <LinearGradient
      colors={panelStyle}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 0}}
      style={[styles.p_5, styles.rounded_2xl, styles.mb_4]}>
      <View style={[styles.flex_container_between, styles.mb_2]}>
        <View style={[styles.flex_container_center]}>
          <Text
            style={[
              styles.text_bold,
              styles.text_white,
              styles.text_lg,
              styles.mr_2,
            ]}>
            {coin_code}
          </Text>
          <Text style={[styles.text_white, styles.text_md]}>{operateName}</Text>
        </View>
        <Text style={[styles.text_gray_50, styles.text_md]}>10:32</Text>
      </View>
      <View style={[styles.flex_row]}>
        <View style={[styles.w_1_3]}>
          <Text style={[styles.text_sm, styles.text_gray_50, styles.mb_1]}>
            数量
          </Text>
          <Text style={[styles.text_md, styles.text_white]}>
            {Formater.fixed(volumn, 4)}
          </Text>
        </View>
        <View style={[styles.w_1_3, styles.items_end]}>
          <Text style={[styles.text_sm, styles.text_gray_50, styles.mb_1]}>
            金额
          </Text>
          <Text style={[styles.text_md, styles.text_white]}>
            ${Formater.formatAmount(amount)}
          </Text>
        </View>
        <View style={[styles.w_1_3, styles.items_end]}>
          <Text style={[styles.text_sm, styles.text_gray_50, styles.mb_1]}>
            价格
          </Text>
          <Text style={[styles.text_md, styles.text_white]}>
            ${Formater.formatAmount(price)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const OperateList = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  const dataCount = data.length;

  return (
    <View style={[styles.mb_4]}>
      <Text
        style={[
          styles.mb_4,
          styles.text_md,
          styles.text_center,
          styles.text_hint,
        ]}>
        累计 {dataCount} 条交易记录
      </Text>
      {data.map((item: any, index: number) => {
        return <OperateItem data={item} key={`operate_${index}`} />;
      })}
    </View>
  );
};

const OperateScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const dispatch = useDispatch();
  const {operates: userOperates} = useSelector((state: any) => state.user);

  const loading = useSelector(
    (state: any) => state.loading.effects['user/operates'],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  useEffect(() => {
    dispatch({
      type: 'user/operates',
    });
  }, [dispatch]);

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
      style={styles.screen_container_with_padding}>
      <OperateList data={userOperates} />
    </ScrollView>
  );
};

export default OperateScreen;
