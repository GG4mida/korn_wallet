import React, {useEffect, useCallback} from 'react';
import {SectionList, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getColor, tailwind} from '@/core/tailwind';
import {NewsItem, NewsHeader} from '@/components/news';

const NewsScreen = ({}: any) => {
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    await dispatch({
      type: 'news/get',
    });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLoading = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const {list: newsData} = useSelector((state: any) => state.news);
  const loading = useSelector(
    (state: any) => state.loading.effects['news/get'],
  );

  const renderSectionItem = (props: any) => {
    const {item} = props;
    return <NewsItem data={item} />;
  };

  const renderSectionHeader = (props: any) => {
    const {section} = props;
    return <NewsHeader data={section} />;
  };

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <SectionList
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleLoading}
            tintColor={getColor('gray-500')}
          />
        }
        sections={newsData}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NewsScreen;
