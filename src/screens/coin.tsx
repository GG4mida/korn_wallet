import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import {coinTab} from '@/constants/tab';
import {CoinSorter, CoinTab, CoinListItem} from '@/components/coinList';
import styles from '@/core/styles';
import {SortField, SortRule} from '@/constants/enum';
import EmptySvg from '@/assets/svg/empty.svg';

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

  const renderCoinItem = (prop: any) => {
    const {item} = prop;
    return <CoinListItem data={item} />;
  };

  return (
    <FlatList
      data={coinList}
      renderItem={renderCoinItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.symbol}
    />
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

  const renderCoinItem = (prop: any) => {
    const {item} = prop;
    return <CoinListItem data={item} />;
  };

  return (
    <FlatList
      data={coinList}
      renderItem={renderCoinItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.symbol}
    />
  );
};

const CoinContent = (props: any) => {
  const {tab, setTab, data, sorter} = props;
  if (tab === coinTab.ALL) {
    return <CoinAll data={data.all} sorter={sorter} />;
  }
  return (
    <CoinFavorites data={data.favorites} sorter={sorter} emptyAction={setTab} />
  );
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
      <CoinTab value={tab} onChange={setTab} />
      <CoinSorter sorter={sorter} onChange={setSorter} />
      <CoinContent
        data={coinListData}
        sorter={sorter}
        tab={tab}
        setTab={setTab}
      />
    </View>
  );
};

export default CoinScreen;
