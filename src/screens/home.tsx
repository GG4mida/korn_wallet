import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from '@/styles';
import {
  HomeJumbo,
  HomeHolds,
  HomeSectionHeader,
  HomeHeaderTheme,
} from '@/components/home';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HomeHeaderTheme />,
    });
  }, [navigation]);

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
