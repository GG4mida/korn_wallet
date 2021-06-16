import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useTheme from '@/core/theme';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {RouteConfig} from '@/constants/navigation';
import {DateTime} from '@/utils';

const DiscoveryTopicItem = (props: any) => {
  const {styles} = useTheme();
  const {data, handlePress} = props;
  const {title, summary, createtime} = data;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => handlePress(data)}
      style={[styles.bg_foreground, styles.mb_3, styles.px_4, styles.py_3]}>
      <Text
        style={[
          styles.text_bold,
          styles.text_md,
          styles.text_leading,
          styles.mb_2,
        ]}>
        {title}
      </Text>
      <Text style={[styles.text_content, styles.text_md, styles.mb_2]}>
        {summary}
      </Text>
      <Text style={[styles.text_hint, styles.text_sm]}>
        {DateTime.format(createtime, DateTime.FORMATER_DATETIME)}
      </Text>
    </TouchableOpacity>
  );
};

const DiscoveryTopicList = (props: any) => {
  const {styles} = useTheme();
  const {loading, data, handlePress} = props;
  if (loading === true) {
    return (
      <View
        style={[styles.flex_container_center, styles.flex_col, styles.flex_1]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View
        style={[styles.flex_container_center, styles.flex_col, styles.flex_1]}>
        <Text style={[styles.text_hint, styles.text_base]}>暂无数据</Text>
      </View>
    );
  }

  const renderTopicItem = (prop: any) => {
    const {item} = prop;
    return <DiscoveryTopicItem data={item} handlePress={handlePress} />;
  };

  return (
    <View style={[styles.my_3]}>
      <FlatList
        data={data}
        renderItem={renderTopicItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const DiscoveryTopicScreen = ({navigation, route}: any) => {
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
      navigation.navigate(RouteConfig.DiscoveryTopicDetail.name, item);
    },
    [navigation],
  );

  const {list: topicList} = useSelector((state: any) => state.topic);
  const loading = useSelector(
    (state: any) => state.loading.effects['topic/getList'],
  );

  return (
    <View style={styles.screen_container}>
      <DiscoveryTopicList
        loading={loading}
        data={topicList}
        handlePress={handleItemPress}
      />
    </View>
  );
};

export default DiscoveryTopicScreen;
