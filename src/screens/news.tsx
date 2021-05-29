import React, {useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getColor, tailwind} from '@/core/tailwind';
import {DateTime} from '@/utils';

const NUM_OF_CONTENT = 3;

const NewsItem = (props: any) => {
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [collapseText, setCollapseText] = useState('查看全文');
  const [showCollapse, setShowCollapse] = useState(false);

  const handleCollapsePress = useCallback(() => {
    setShowCollapse(!showCollapse);
    if (showCollapse === true) {
      setCollapseText('查看全文');
    } else {
      setCollapseText('收起');
    }
  }, [showCollapse]);

  const handleContentLayout = useCallback(
    e => {
      if (numberOfLines === 0) {
        setNumberOfLines(e.nativeEvent.lines.length);
      }
    },
    [numberOfLines],
  );

  const {data} = props;
  const {createtime, title, content} = data;
  const dataTime = DateTime.format(createtime, DateTime.FORMATER_TIME);
  return (
    <View style={tailwind('bg-white rounded-xl mb-3 p-5')}>
      <View style={tailwind('mb-2 flex-row items-center justify-between')}>
        <Text style={tailwind('text-sm text-gray-500')}>{dataTime}</Text>
      </View>

      <View style={tailwind('mb-2')}>
        <Text style={tailwind('text-base font-bold text-gray-800')}>
          {title}
        </Text>
      </View>

      <View style={tailwind('mb-2')}>
        <Text
          numberOfLines={
            numberOfLines === 0
              ? undefined
              : showCollapse
              ? numberOfLines
              : NUM_OF_CONTENT
          }
          ellipsizeMode="tail"
          onTextLayout={handleContentLayout}
          style={tailwind('text-base text-gray-600')}>
          {content}
        </Text>
      </View>

      {numberOfLines > NUM_OF_CONTENT ? (
        <TouchableOpacity activeOpacity={0.5} onPress={handleCollapsePress}>
          <Text style={tailwind('text-base text-blue-500')}>
            {collapseText}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const NewsContent = (props: any) => {
  const {data} = props;
  return (
    <View style={tailwind('pt-2 pb-5 px-5')}>
      {data.map((item: any, index: number) => {
        return <NewsItem data={item} key={`news_${index}`} />;
      })}
    </View>
  );
};

const NewsScreen = ({}: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const [paginating, setPagination] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {list: newsData} = useSelector((state: any) => state.news);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    await dispatch({
      type: 'news/get',
      payload: {
        pageIndex,
        pageSize: 10,
      },
    });
  }, [dispatch, pageIndex]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleScrollEnd = useCallback(
    async e => {
      const offsetY = e.nativeEvent.contentOffset.y;
      const contentSizeHeight = e.nativeEvent.contentSize.height;
      const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height;
      if (offsetY + oriageScrollHeight >= contentSizeHeight) {
        setPagination(true);
        setPageIndex(pageIndex + 1);
        await fetchData();
        setPagination(false);
      }
    },
    [fetchData, pageIndex],
  );

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setPageIndex(1);
    await fetchData();
    setRefreshing(false);
  }, [fetchData]);

  const {data} = newsData;

  return (
    <View style={tailwind('flex-1 bg-gray-50 pt-3')}>
      <ScrollView
        onMomentumScrollEnd={handleScrollEnd}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={getColor('gray-500')}
            title=""
          />
        }
        style={tailwind('flex-1')}>
        <NewsContent data={data} />
        {paginating ? (
          <View style={tailwind('pb-6')}>
            <ActivityIndicator color={getColor('gray-600')} />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
