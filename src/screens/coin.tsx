import React, {useEffect, useState, useMemo} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import {coinTab, coinTabs} from '@/constants/tab';
import Tab from '@/components/tab';
import Sorter from '@/components/coin/sorter';
import styles from '@/core/styles';
import {Formater} from '@/utils';
import {RouteConfig} from '@/constants/navigation';
import {SortField, SortRule} from '@/constants/enum';
import EmptySvg from '@/assets/svg/empty.svg';
import {ScrollView} from 'react-native-gesture-handler';

const SorterFunc = (data: any, sorter: any) => {
  if (!data || data.length === 0) {
    return [];
  }

  const {name: sortName, rule: sortRule} = sorter;
  const sortData: any = [...data];

  sortData.sort((a: any, b: any) => {
    let sortFieldValA, sortFieldValB;
    if (sortName === SortField.NAME) {
      sortFieldValA = a.symbol;
      sortFieldValB = b.symbol;
    }
    if (sortName === SortField.PRICE) {
      sortFieldValA = a.priceUSD;
      sortFieldValB = b.priceUSD;
    }
    if (sortName === SortField.CHANGE) {
      sortFieldValA = a.change;
      sortFieldValB = b.change;
    }

    if (sortRule === SortRule.ASC) {
      if (
        Number.isNaN(parseFloat(sortFieldValA)) &&
        Number.isNaN(parseFloat(sortFieldValB))
      ) {
        return sortFieldValB > sortFieldValA ? 1 : -1;
      }

      return parseFloat(sortFieldValB) - parseFloat(sortFieldValA);
    }
    if (sortRule === SortRule.DESC) {
      if (
        Number.isNaN(parseFloat(sortFieldValA)) &&
        Number.isNaN(parseFloat(sortFieldValB))
      ) {
        return sortFieldValA > sortFieldValB ? 1 : -1;
      }

      return parseFloat(sortFieldValA) - parseFloat(sortFieldValB);
    }
  });

  return sortData;
};

const CoinItem = (props: any) => {
  const {data} = props;
  const {name, symbol, logo_png, priceUSD, priceCNY, change} = data;

  const changeStyle =
    parseFloat(change) > 0 ? 'text-red-600' : 'text-green-600';

  const navigation = useNavigation();
  const handleItemPress = (item: any) => {
    navigation.navigate(RouteConfig.CoinDetail.name, item);
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemPress(data)}
      activeOpacity={0.5}
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-50 px-5 py-3',
      )}>
      <View style={tailwind('flex flex-row w-1/3 items-center')}>
        <Image
          source={{uri: logo_png}}
          style={tailwind('w-6 h-6 rounded-full')}
        />
        <View style={tailwind('ml-3')}>
          <Text style={tailwind('text-gray-800 text-lg')}>{symbol}</Text>
          <Text style={tailwind('text-gray-500 text-xs')}>{name}</Text>
        </View>
      </View>

      <View style={tailwind('flex flex-col items-end w-1/3')}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-xs text-gray-600')}>¥</Text>
          <Text style={tailwind('text-xs text-gray-600')}>
            {Formater.formatAmount(priceCNY)}
          </Text>
        </View>
        <View style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-gray-800')}>$</Text>
          <Text style={tailwind('text-base text-gray-800')}>
            {Formater.formatAmount(priceUSD)}
          </Text>
        </View>
      </View>

      <View style={tailwind('flex flex-row w-1/3 items-center justify-end')}>
        <Text style={tailwind(`${changeStyle} text-base`)}>
          {Formater.formatChange(change)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CoinAll = (props: any) => {
  const {data, sorter} = props;

  const coinList = useMemo(() => {
    return SorterFunc(data, sorter);
  }, [data, sorter]);

  if (data.length === 0) {
    return (
      <View
        style={tailwind('flex flex-1 flex-col items-center justify-center')}>
        <EmptySvg width={80} height={80} style={tailwind('mb-3')} />
        <Text style={tailwind('mb-5 text-base text-gray-400 text-center')}>
          暂无行情数据
        </Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tailwind('flex-1')}>
      {coinList.map((dataItem: any, index: number) => (
        <CoinItem data={dataItem} key={`coin_all_${index}`} />
      ))}
    </ScrollView>
  );
};

const CoinFavorites = (props: any) => {
  const {data, sorter} = props;

  const coinList = useMemo(() => {
    return SorterFunc(data, sorter);
  }, [data, sorter]);

  if (data.length === 0) {
    return (
      <View
        style={tailwind('flex flex-1 flex-col items-center justify-center')}>
        <EmptySvg width={80} height={80} style={tailwind('mb-3')} />
        <Text style={tailwind('mb-5 text-base text-gray-400 text-center')}>
          暂无自选
        </Text>
        <TouchableOpacity
          onPress={() => props.emptyAction(coinTab.ALL)}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={tailwind('text-base text-white mr-1')}>
            前往行情页面添加
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tailwind('flex-1')}>
      {coinList.map((dataItem: any, index: number) => (
        <CoinItem data={dataItem} key={`coin_favorite_${index}`} />
      ))}
    </ScrollView>
  );
};

const CoinTabs = (props: any) => {
  const {value, onChange} = props;
  return <Tab data={coinTabs} value={value} onChange={onChange} />;
};

const CoinHeader = (props: any) => {
  const {value, onChange} = props;
  const {name, rule} = value;
  return <Sorter name={name} rule={rule} onChange={onChange} />;
};

const CoinScreen = ({}: any) => {
  const [tab, setTab] = useState(coinTab.ALL);
  const [sorter, setSorter] = useState({
    name: SortField.NAME,
    rule: SortRule.NONE,
  });
  const dispatch = useDispatch();
  const {all, favorites} = useSelector((state: any) => state.coin);
  const {list: marketList} = useSelector((state: any) => state.market);
  const {exchange} = useSelector((state: any) => state.exchange);

  useEffect(() => {
    dispatch({
      type: 'coin/all',
    });
    dispatch({
      type: 'coin/favorites',
    });
  }, [dispatch]);

  const coinListData = useMemo(() => {
    let coinList = {
      all: [],
      favorites: [],
    };
    const handler = (list: any): any => {
      const result = [];
      for (let item of list) {
        const {symbol} = item;
        const marketInfo = marketList[symbol];
        const {c: marketPrice, P: marketChange} = marketInfo;
        const marketPriceCNY = parseFloat(marketPrice) * parseFloat(exchange);
        result.push({
          ...item,
          priceUSD: marketPrice,
          priceCNY: marketPriceCNY,
          change: marketChange,
        });
      }
      return result;
    };
    if (all && all.length) {
      coinList.all = handler(all);
    }
    if (favorites && favorites.length) {
      coinList.favorites = handler(favorites);
    }
    return coinList;
  }, [all, favorites, marketList, exchange]);

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <CoinTabs value={tab} onChange={setTab} />
      <CoinHeader value={sorter} onChange={setSorter} />
      {tab === coinTab.ALL ? (
        <CoinAll data={coinListData.all} sorter={sorter} />
      ) : (
        <CoinFavorites
          data={coinListData.favorites}
          sorter={sorter}
          emptyAction={setTab}
        />
      )}
    </View>
  );
};

export default CoinScreen;
