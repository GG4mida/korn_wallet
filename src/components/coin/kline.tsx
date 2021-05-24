import React, {useMemo, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LineChart, Grid} from 'react-native-svg-charts';
import {tailwind, getColor} from '@/core/tailwind';
import {useRoute} from '@react-navigation/native';
import {Storage, DateTime} from '@/utils';
import {klineTab} from '@/constants/tab';

interface IProps {
  type: klineTab;
}

const CoinKline = (props: IProps) => {
  const {type} = props;
  const route = useRoute();
  const coin: any = route.params;
  const {symbol} = coin;

  const dispatch = useDispatch();
  const {data} = useSelector((state: any) => state.kline);
  const loading = useSelector((state: any) => state.loading.models.kline);

  const dataKey = `${symbol}${type}`;
  const klineData = data[dataKey];

  const klineFormatedData = useMemo(() => {
    const result: any = {label: [], value: []};
    if (klineData && klineData.length) {
      klineData.forEach((item: any) => {
        const [time, price] = item;

        let formatedTime = null;
        if (type === klineTab.DAY) {
          formatedTime = DateTime.format(time, DateTime.FORMATTER_TIME);
        } else {
          formatedTime = DateTime.format(time, DateTime.FORMATER_DAY);
        }

        result.label.push(formatedTime);
        result.value.push(parseFloat(price));
      });
    }
    return result;
  }, [klineData, type]);

  useEffect(() => {
    async function fetchData() {
      const klineCache = await Storage.getItem(dataKey);
      if (klineCache) {
        return;
      }
      dispatch({
        type: 'kline/get',
        payload: {
          coin: symbol,
          type,
        },
      });
    }

    fetchData();
  }, [dispatch, type, symbol, dataKey]);

  const {value} = klineFormatedData;

  if (loading === true) {
    return (
      <View style={styles.chart_container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (value.length === 0) {
    return (
      <View style={styles.chart_container}>
        <Text style={tailwind('text-gray-400 text-sm')}>暂无数据</Text>
      </View>
    );
  }

  return (
    <View style={styles.chart_container}>
      <LineChart
        animate={true}
        style={styles.chart_content}
        data={value}
        svg={{stroke: getColor('green-600')}}
        contentInset={{top: 10, bottom: 10, left: 10, right: 0}}>
        <Grid svg={{stroke: getColor('gray-100')}} />
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  chart_container: {
    height: 240,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: getColor('white'),
    borderBottomWidth: 1,
    borderBottomColor: getColor('gray-100'),
  },
  chart_content: {
    height: 220,
    width: Dimensions.get('window').width - 40,
  },
});

export default CoinKline;
