import React, {useEffect} from 'react';
import {ScrollView, Text, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenType} from '@/constants/enum';
import {String} from '@/utils';
import {useTheme} from '@/hooks';
import {HistoryList} from './component';

const HistoryScreen = ({}: any) => {
  const {styles, styleConfig} = useTheme();
  const dispatch = useDispatch();
  const {operates: userOperates} = useSelector((state: any) => state.user);

  const loading = useSelector(
    (state: any) => state.loading.effects['user/operates'],
  );

  useEffect(() => {
    dispatch({
      type: 'user/operates',
    });
  }, [dispatch]);

  if (loading === true) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <ActivityIndicator color={styleConfig.color.hint} />
      </View>
    );
  }

  if (userOperates.length === 0) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <Text style={[styles.text_md, styles.text_hint]}>暂无数据</Text>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.screen_container, styles.bg_background]}>
      <HistoryList data={userOperates} />
    </ScrollView>
  );
};

export default {
  name: String.getRandomString(),
  title: '交易记录',
  screen: HistoryScreen,
  type: [ScreenType.STACK],
};
