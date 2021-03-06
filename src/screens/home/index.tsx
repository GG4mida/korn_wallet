import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from '@/hooks';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';
import {HomeJumbo, HomeHolds, HomeAction} from './components';

const HomeScreen = ({}: any) => {
  const dispatch = useDispatch();
  const {styles} = useTheme();

  useEffect(() => {
    dispatch({
      type: 'coin/favorites',
    });
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.screen_container_with_padding, styles.bg_foreground]}>
      <HomeJumbo />
      <HomeAction />
      <HomeHolds />
    </ScrollView>
  );
};

export default {
  name: String.getRandomString(),
  title: '首页',
  screen: HomeScreen,
  type: [ScreenType.TAB],
};
