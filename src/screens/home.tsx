import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import {HomeSummary, HomeHolds, HomeSectionHeader} from '@/components/home';

const HomeScreen = ({}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'ticker/favorites',
    });
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <HomeSummary />
      <HomeSectionHeader />
      <HomeHolds />
    </ScrollView>
  );
};

export default HomeScreen;
