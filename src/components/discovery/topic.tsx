import React, {useCallback, useMemo, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DiscoveryGroup from './group';
import {useNavigation} from '@react-navigation/native';
import * as Screens from '@/screens';
import useTheme from '@/core/theme';

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
      navigation.navigate(Screens.Topic.name, data);
    },
    [navigation],
  );

  const discoveryConfig = useMemo(() => {
    const config: any = {
      title: '文章',
    };
    if (topicCategoryList && topicCategoryList.length) {
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
    }
    return config;
  }, [topicCategoryList, styles]);

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
