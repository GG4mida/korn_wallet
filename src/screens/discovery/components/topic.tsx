import React, {useCallback, useMemo, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DiscoveryGroup from './group';
import {useNavigation} from '@react-navigation/native';
import {TopicScreen} from '@/screens';
import {useTheme} from '@/hooks';

const DiscoveryTopic = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {styles} = useTheme();

  useEffect(() => {
    dispatch({
      type: 'topicCategory/getList',
    });
  }, [dispatch]);

  const {list: topicCategoryList} = useSelector(
    (state: any) => state.topicCategory,
  );

  const loading = useSelector(
    (state: any) => state.loading.effects['topicCategory/getList'],
  );

  const handleItemPress = useCallback(
    data => {
      const {id, name} = data;
      navigation.navigate(TopicScreen.name, {id, name});
    },
    [navigation],
  );

  const discoveryConfig = useMemo(() => {
    if (topicCategoryList && topicCategoryList.length) {
      const config: any = {
        title: '文章',
      };
      const configItems: any = [];
      for (let category of topicCategoryList) {
        const {id, icon, name} = category;
        const item = {
          id,
          name,
          icon: (
            <Image
              source={{uri: icon}}
              style={[customStyles.item_img, styles.rounded]}
            />
          ),
        };
        configItems.push(item);
      }
      config.items = configItems;
      return config;
    }
  }, [topicCategoryList, styles]);

  if (!discoveryConfig) {
    return null;
  }

  return (
    <DiscoveryGroup
      handlePress={handleItemPress}
      data={discoveryConfig}
      col={3}
      loading={loading}
    />
  );
};

const customStyles = StyleSheet.create({
  item_img: {
    width: 36,
    height: 36,
  },
});

export default DiscoveryTopic;
