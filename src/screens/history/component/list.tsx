import React from 'react';
import {View} from 'react-native';
import useTheme from '@/core/theme';
import HistoryItem from './item';

const HistoryList = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.my_3]}>
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </View>
  );
};

export default HistoryList;
