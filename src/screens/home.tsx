import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import useTheme from '@/core/theme';
import {HomeJumbo, HomeHolds, HomeSectionHeader} from '@/components/home';

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
      <HomeSectionHeader />
      <HomeHolds />
    </ScrollView>
  );
};

export default HomeScreen;
