import React from 'react';
import {View, Text} from 'react-native';
import {Header, Tab} from 'react-native-elements';
import {tailwind} from '@/core/tailwind';
import {NavigationTabs} from '@/constants/tab_news';

const TabListItem = (props: any) => {
  const {item} = props;
  return (
    <Tab.Item
      title={item.name}
      titleStyle={{
        paddingVertical: 2,
        marginBottom: 3,
        color: '#222',
        fontSize: 16,
      }}
      containerStyle={{
        backgroundColor: '#fff',
      }}
    />
  );
};

const HeaderCenterComponent = (props: any) => {
  const {value, onChange} = props;
  return (
    <Tab
      value={value}
      onChange={onChange}
      indicatorStyle={{
        backgroundColor: '#444',
        bottom: -1,
      }}>
      {NavigationTabs.map((item: any, index: number) => (
        <TabListItem key={index} item={item} />
      ))}
    </Tab>
  );
};

const NewsItem = () => {
  return (
    <View style={tailwind('bg-white rounded-xl p-4 mb-3')}>
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
  );
};

const NewsScreen = ({}: any) => {
  const onChange = (index: number) => {
    console.info('on change:', index);
  };

  return (
    <View style={tailwind('flex-1')}>
      <Header
        statusBarProps={{barStyle: 'dark-content'}}
        barStyle="dark-content"
        centerComponent={
          <HeaderCenterComponent onChange={onChange} value={1} />
        }
        centerContainerStyle={{
          flex: 4,
        }}
        containerStyle={{
          paddingBottom: 0,
          paddingTop: 0,
          backgroundColor: '#fff',
        }}
      />

      <View style={tailwind('bg-gray-100 p-4')}>
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
};

export default NewsScreen;
