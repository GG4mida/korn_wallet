import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {useTheme} from '@/hooks';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {TopicDetailScreen} from '@/screens';
import {ScreenType} from '@/constants/enum';
import {String} from '@/utils';
import {TopicList} from './components';

const TopicScreen = ({navigation, route}: any) => {
  const {styles, styleConfig} = useTheme();
  const dispatch = useDispatch();

  const data: any = route.params;
  const {id: categoryId, name} = data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig, name]);

  useEffect(() => {
    dispatch({
      type: 'topic/getList',
      payload: {
        cid: categoryId,
      },
    });
  }, [dispatch, categoryId]);

  const handleItemPress = useCallback(
    item => {
      navigation.navigate(TopicDetailScreen.name, item);
    },
    [navigation],
  );

  const {list: topicList} = useSelector((state: any) => state.topic);
  const loading = useSelector(
    (state: any) => state.loading.effects['topic/getList'],
  );

  return (
    <View style={styles.screen_container}>
      <TopicList
        loading={loading}
        data={topicList}
        handlePress={handleItemPress}
      />
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '文章列表',
  screen: TopicScreen,
  type: [ScreenType.STACK],
};
