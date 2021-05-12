import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';
import TickerAction from '@/store/actions/ticker';

const StartUpScreen = ({}: any) => {
  const tickerStore = useSelector(state => state.ticker);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TickerAction.getFavorites());
  }, [dispatch]);

  console.info('ticker screen favorites:');
  console.info(tickerStore);

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-4 flex flex-row justify-center')}>
        <Text>这是启动页</Text>
      </View>
    </View>
  );
};

export default StartUpScreen;
