import React from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {useTheme} from '@/hooks';
import TopicItem from './item';

const TopicList = (props: any) => {
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
        <Text style={[styles.text_hint, styles.text_md]}>暂无数据</Text>
      </View>
    );
  }

  const renderTopicItem = (prop: any) => {
    const {item} = prop;
    return <TopicItem data={item} handlePress={handlePress} />;
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

export default TopicList;
