import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {LineChart} from 'react-native-chart-kit';
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
  return (
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 px-5 py-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Image
          source={require('../assets/img/btc.png')}
          style={tailwind('w-8 h-8 rounded-full')}
        />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-lg')}>BTC</Text>
          <Text style={tailwind('text-gray-500 text-xs')}>比特币</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end w-1/3')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-xs text-gray-600 italic mr-1')}>$</Text>
          <Text style={tailwind('text-xs text-gray-600')}>7999.12</Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-800 italic mr-1')}>$</Text>
          <Text style={tailwind('text-base text-gray-800')}>301233.22</Text>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center')}>
        <Icon name="arrow-up" size={16} style={tailwind('text-red-600')} />
        <Text style={tailwind('text-red-600 text-base')}>12.33%</Text>
      </View>
    </View>
  );
};

const TickerTrade = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center flex-wrap justify-between bg-white border-b border-gray-100 p-1',
      )}>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-500 text-sm')}>今日涨幅</Text>
        <Text style={tailwind('text-red-600 text-sm')}>+12.33%</Text>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-500 text-sm')}>最新价格</Text>
        <Text style={tailwind('text-red-600 text-sm')}>+12.33%</Text>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-500 text-sm')}>24小时量</Text>
        <Text style={tailwind('text-red-600 text-sm')}>+12.33%</Text>
      </View>
      <View
        style={tailwind(
          'flex flex-row items-center justify-between px-3 py-1 w-1/2',
        )}>
        <Text style={tailwind('text-gray-500 text-sm')}>24小时额</Text>
        <Text style={tailwind('text-red-600 text-sm')}>+12.33%</Text>
      </View>
    </View>
  );
};

const TickerChartBar = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-between border-b border-gray-100 bg-gray-50 px-3 py-2',
      )}>
      <View style={tailwind('rounded-xl px-5 py-2')}>
        <Text style={tailwind('text-gray-700')}>天</Text>
      </View>
      <View style={tailwind('rounded-lg px-5 py-2')}>
        <Text style={tailwind('text-gray-700')}>周</Text>
      </View>
      <View
        style={tailwind(
          'bg-gray-100 border border-gray-200 rounded-2xl px-5 py-2',
        )}>
        <Text style={tailwind('text-gray-700')}>月</Text>
      </View>
      <View style={tailwind('rounded-lg px-5 py-2')}>
        <Text style={tailwind('text-gray-700')}>年</Text>
      </View>
      <View style={tailwind('rounded-lg px-5 py-2')}>
        <Text style={tailwind('text-gray-700')}>全部</Text>
      </View>
    </View>
  );
};

const TickerChart = () => {
  const labels: string[] = [];
  const datas = [];
  for (let i = 10; i < 400; i++) {
    labels.push(`00:${i}`);
    datas.push(Math.random() * 100);
  }

  const formatLabel = (value: string) => {
    const {length} = labels;
    const showNum = 5;

    const labelDistance = Math.floor(length / showNum);

    const valueIndex = labels.indexOf(value);
    if (valueIndex % labelDistance !== 0) {
      return '';
    }
    return `${value}`;
  };

  return (
    <View style={tailwind('border-b border-gray-100')}>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: datas,
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={220}
        withDots={false}
        withShadow={false}
        formatXLabel={value => {
          return formatLabel(value);
        }}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        withVerticalLines={false}
        withHorizontalLines={false}
        chartConfig={{
          decimalPlaces: 4,
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => getColor('green-600'),
          labelColor: () => getColor('gray-600'),
          strokeWidth: 1,
          style: {
            borderRadius: 0,
            width: 1,
            backgroundColor: '#fff',
          },
        }}
        bezier={true}
        style={{
          paddingTop: 15,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
        }}
      />
    </View>
  );
};

const TickerNews = () => {
  return (
    <View style={tailwind('mt-3')}>
      <View style={tailwind('bg-white p-4 mb-3')}>
        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
        </View>

        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-lg font-medium text-gray-800')}>
            USDT 筹码分布从较为集中变为高度集中
          </Text>
        </View>

        <View style={tailwind('mb-2')}>
          <Text style={tailwind('text-base text-gray-600')}>
            根据 LongHash 大数据监控，USDT
            筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
            集中于 Huobi 交易所。
          </Text>
        </View>

        <View>
          <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
        </View>
      </View>
      <View style={tailwind('bg-white p-4 mb-3')}>
        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
        </View>

        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-lg font-medium text-gray-800')}>
            USDT 筹码分布从较为集中变为高度集中
          </Text>
        </View>

        <View style={tailwind('mb-2')}>
          <Text style={tailwind('text-base text-gray-600')}>
            根据 LongHash 大数据监控，USDT
            筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
            集中于 Huobi 交易所。
          </Text>
        </View>

        <View>
          <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
        </View>
      </View>
      <View style={tailwind('bg-white p-4 mb-3')}>
        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
        </View>

        <View style={tailwind('mb-1')}>
          <Text style={tailwind('text-lg font-medium text-gray-800')}>
            USDT 筹码分布从较为集中变为高度集中
          </Text>
        </View>

        <View style={tailwind('mb-2')}>
          <Text style={tailwind('text-base text-gray-600')}>
            根据 LongHash 大数据监控，USDT
            筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
            集中于 Huobi 交易所。
          </Text>
        </View>

        <View>
          <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
        </View>
      </View>
    </View>
  );
};

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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-gray-600'),
      headerBackImage: () => <HeaderLeftComponent />,
      headerRight: () => <HeaderRightComponent />,
    });
  }, [navigation]);

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <ScrollView
        style={tailwind('flex-1')}
        showsVerticalScrollIndicator={false}>
        <TickerBase />
        <TickerTrade />
        <TickerChartBar />
        <TickerChart />
        <TickerNews />
      </ScrollView>

      <TickerActions />
    </View>
  );
};

export default TickerDetailScreen;
