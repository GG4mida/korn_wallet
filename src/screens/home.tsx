import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from '@/styles';
import {HomeJumbo, HomeHolds, HomeSectionHeader} from '@/components/home';

const HomeScreen = ({}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'coin/favorites',
    });
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screen_container_with_padding}>
      <HomeJumbo />
      <HomeSectionHeader />
      <HomeHolds />
    </ScrollView>
  );
};

export default HomeScreen;
