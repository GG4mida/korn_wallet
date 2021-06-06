import React from 'react';
import {FlatList, View, Text} from 'react-native';
import useTheme from '@/core/theme';
import {useSelector} from 'react-redux';

const TopicItem = () => {
  return (
    <View>
      <Text>item</Text>
    </View>
  );
};

const TopicList = () => {
  const {list: topicList} = useSelector((state: any) => state.topic);
  return (
    <FlatList
      data={topicList}
      renderItem={TopicItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

const TopicScreen = () => {
  const {styles} = useTheme();
  return (
    <View style={styles.screen_container}>
      <TopicList />
    </View>
  );
};

export default TopicScreen;
