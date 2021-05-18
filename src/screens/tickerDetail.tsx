import React, {useEffect, useState, useMemo} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LineChart, Grid} from 'react-native-svg-charts';
import {Formater, Storage, DateTime} from '@/utils';
import {klineTab, klineTabs} from '@/constants/tab';
import {tailwind, getColor} from '@/core/tailwind';

const HeaderLeftComponent = () => {
  return (
    <View style={tailwind('ml-5 mr-2')}>
      <Icon name="arrow-left" size={18} color={getColor('gray-600')} />
    </View>
  );
};

const HeaderRightComponent = () => {
  const onPress = () => {
    console.info('wtf');
  };
  return (
    <View style={tailwind('flex flex-row items-center px-5')}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <Icon name="heart" size={18} color={getColor('gray-600')} />
      </TouchableOpacity>
    </View>
  );
};

const TickerBase = () => {
  const route = useRoute();

  const data: any = route.params;

  const {basic, meta} = data;
  const {name, symbol, logo_png} = basic;
  const {P: change, c: price} = meta;

  const changeStyle =
    parseFloat(change) > 0 ? 'text-red-600' : 'text-green-600';

  return (
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 px-5 py-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Image
          source={{uri: logo_png}}
          style={tailwind('w-8 h-8 rounded-full')}
        />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-lg')}>{symbol}</Text>
          <Text style={tailwind('text-gray-500 text-xs')}>{name}</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end w-1/3')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-xs text-gray-600 italic')}>$</Text>
          <Text style={tailwind('text-xs text-gray-600')}>{price}</Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-600 italic')}>$</Text>
          <Text style={tailwind('text-base text-gray-600')}>{price}</Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {Formater.formatTickerChange(change)}
        </Text>
      </View>
    </View>
  );
};

const TickerTrade = () => {
  const route = useRoute();

  const data: any = route.params;
  const {meta} = data;
  const {h: dayHigh, l: dayLow, n: dayCount, v: dayVolumn} = meta;

  const dayCountData: any = Formater.formatBigNumber(dayCount);
  const dayVolumnData: any = Formater.formatBigNumber(dayVolumn);

  return (
    <View
      style={tailwind(
        'flex flex-row items-center flex-wrap justify-between bg-white border-b border-gray-100 p-2',
      )}>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h最高</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm italic')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>{dayHigh}</Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h成交量</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayCountData.value}
          </Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayCountData.unit}
          </Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h最低</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm italic')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>{dayLow}</Text>
        </View>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-400 text-sm')}>24h成交额</Text>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm italic')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayVolumnData.value}
          </Text>
          <Text style={tailwind('text-gray-600 text-sm')}>
            {dayVolumnData.unit}
          </Text>
        </View>
      </View>
    </View>
  );
};

const TickerChartBar = (props: any) => {
  const {data, value, onChange} = props;
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-between border-b border-gray-100 bg-gray-50 px-3 py-2',
      )}>
      {data.map((tabItem: any, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() => onChange(tabItem.name)}
            style={tailwind(
              `rounded-full px-5 py-2 border border-gray-50 ${
                tabItem.name === value
                  ? 'bg-gray-100 border border-gray-200'
                  : ''
              }`,
            )}>
            <Text style={tailwind('text-gray-700')}>{tabItem.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TickerChart = (props: any) => {
  const {type} = props;
  const route = useRoute();
  const ticker: any = route.params;
  const {basic} = ticker;
  const {symbol} = basic;

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

// const TickerNews = () => {
//   return (
//     <View style={tailwind('mt-3')}>
//       <View style={tailwind('bg-white p-4 mb-3')}>
//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
//         </View>

//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-lg font-medium text-gray-800')}>
//             USDT 筹码分布从较为集中变为高度集中
//           </Text>
//         </View>

//         <View style={tailwind('mb-2')}>
//           <Text style={tailwind('text-base text-gray-600')}>
//             根据 LongHash 大数据监控，USDT
//             筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
//             集中于 Huobi 交易所。
//           </Text>
//         </View>

//         <View>
//           <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
//         </View>
//       </View>
//       <View style={tailwind('bg-white p-4 mb-3')}>
//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
//         </View>

//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-lg font-medium text-gray-800')}>
//             USDT 筹码分布从较为集中变为高度集中
//           </Text>
//         </View>

//         <View style={tailwind('mb-2')}>
//           <Text style={tailwind('text-base text-gray-600')}>
//             根据 LongHash 大数据监控，USDT
//             筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
//             集中于 Huobi 交易所。
//           </Text>
//         </View>

//         <View>
//           <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
//         </View>
//       </View>
//       <View style={tailwind('bg-white p-4 mb-3')}>
//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
//         </View>

//         <View style={tailwind('mb-1')}>
//           <Text style={tailwind('text-lg font-medium text-gray-800')}>
//             USDT 筹码分布从较为集中变为高度集中
//           </Text>
//         </View>

//         <View style={tailwind('mb-2')}>
//           <Text style={tailwind('text-base text-gray-600')}>
//             根据 LongHash 大数据监控，USDT
//             筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
//             集中于 Huobi 交易所。
//           </Text>
//         </View>

//         <View>
//           <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const TickerActions = () => {
  return (
    <View
      style={tailwind(
        'bg-white border-t border-gray-100 py-6 px-4 flex flex-row items-center justify-between',
      )}>
      <View>
        <View style={tailwind('flex flex-row items-center mb-1')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓数量：</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>0</Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-gray-600 text-sm')}>持仓价值：</Text>
          <Text style={tailwind('text-gray-600 text-sm italic mr-1')}>$</Text>
          <Text style={tailwind('text-gray-600 text-sm')}>0.00</Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <TouchableOpacity
          style={tailwind('px-6 py-2 bg-yellow-500 rounded-3xl mr-2')}
          onPress={() => null}
          activeOpacity={0.5}>
          <Text style={tailwind('text-white text-base')}>买入</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind('px-6 py-2 bg-pink-500 rounded-3xl')}
          onPress={() => null}
          activeOpacity={0.5}>
          <Text style={tailwind('text-white text-base')}>卖出</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TickerDetailScreen = ({navigation}: any) => {
  const [tab, setTab] = useState(klineTab.DAY);

  const route = useRoute();
  const ticker: any = route.params;
  const {
    basic: {name},
  } = ticker;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerBackTitleStyle: tailwind('text-gray-600'),
      headerBackImage: () => <HeaderLeftComponent />,
      headerRight: () => <HeaderRightComponent />,
    });
  }, [navigation, name]);

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <ScrollView
        style={tailwind('flex-1')}
        showsVerticalScrollIndicator={false}>
        <TickerBase />
        <TickerTrade />
        <TickerChartBar value={tab} data={klineTabs} onChange={setTab} />
        <TickerChart type={tab} />
        {/* <TickerNews /> */}
      </ScrollView>
      <TickerActions />
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

export default TickerDetailScreen;
