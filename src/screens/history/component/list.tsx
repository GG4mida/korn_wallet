import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@/hooks';
import HistoryItem from './item';

interface IProps {
  data: any;
}

const HistoryList = (props: IProps) => {
  const {data} = props;

  const {styles} = useTheme();
  return (
    <View style={[styles.my_3]}>
      {data.map((item: any, index: number) => {
        return <HistoryItem data={item} key={`operate_${index}`} />;
      })}
    </View>
  );
};

export default HistoryList;
