import React, {useEffect, useCallback} from 'react';
import {SectionList, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NewsItem, NewsHeader} from '@/components/news';
import useTheme from '@/core/theme';

const NewsScreen = ({}: any) => {
  const {styles} = useTheme();
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
    <View style={styles.screen_container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleLoading} />
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
