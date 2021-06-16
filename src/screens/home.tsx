import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import useTheme from '@/core/theme';
import {HomeJumbo, HomeHolds, HomeAction} from '@/components/home';

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
      style={[styles.screen_container, styles.bg_foreground]}>
      <HomeJumbo />
      <HomeAction />
      <HomeHolds />
    </ScrollView>
  );
};

export default HomeScreen;
