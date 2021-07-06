import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {coinTab} from '@/constants/config';
import {SortField, SortRule, ScreenType} from '@/constants/enum';
import {IconEmpty, IconArrowRight} from '@/components/icons';
import {String} from '@/utils';
import {useTheme} from '@/hooks';
import {CoinSorter, CoinTab, CoinItem} from './components';

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
  const {styles, styleConfig} = useTheme();
  const {data, sorter} = props;

  const coinList = useMemo(() => {
    return SorterFunc(data, sorter);
  }, [data, sorter]);

  if (data.length === 0) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <IconEmpty
          width={36}
          height={36}
          style={[styles.mb_4]}
          fill={styleConfig.color.hint}
        />
        <Text style={[styles.mb_2, styles.text_hint, styles.text_md]}>
          暂无行情数据
        </Text>
      </View>
    );
  }

  const renderCoinItem = (prop: any) => {
    const {item} = prop;
    return <CoinItem data={item} />;
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
  const {styles, styleConfig} = useTheme();
  const {data, sorter} = props;
  const coinList = useMemo(() => {
    return SorterFunc(data, sorter);
  }, [data, sorter]);
  if (data.length === 0) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <IconEmpty
          width={36}
          height={36}
          style={[styles.mb_4]}
          fill={styleConfig.color.hint}
        />
        <Text style={[styles.mb_3, styles.text_hint, styles.text_md]}>
          暂无自选
        </Text>
        <TouchableOpacity
          onPress={() => props.emptyAction(coinTab.ALL)}
          activeOpacity={0.5}
          style={styles.button_green}>
          <Text style={[styles.text_md, styles.text_white]}>
            前往行情页面添加
          </Text>
          <IconArrowRight
            width={16}
            height={16}
            style={[styles.ml_1]}
            fill={styleConfig.color.white}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const renderCoinItem = (prop: any) => {
    const {item} = prop;
    return <CoinItem data={item} />;
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

const CoinScreen = ({route}: any) => {
  const {styles} = useTheme();
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
    if (route.params && route.params.activeTab) {
      setTab(route.params.activeTab);
    }
  }, [route.params]);

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
        if (!marketInfo) {
          continue;
        }
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
    <View style={[styles.screen_container]}>
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

export default {
  name: String.getRandomString(),
  title: '行情',
  screen: CoinScreen,
  type: [ScreenType.TAB],
};
