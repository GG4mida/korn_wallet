import React, {useEffect, useCallback} from 'react';
import {SectionList, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenType} from '@/constants/enum';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {NewsItem, NewsHeader} from './components';

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

export default {
  name: String.getUUID(),
  title: '资讯',
  screen: NewsScreen,
  type: [ScreenType.TAB],
};
