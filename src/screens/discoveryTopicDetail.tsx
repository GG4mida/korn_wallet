import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MarkdownRender from '@/components/markdown/render';
import {DateTime} from '@/utils';
import useTheme from '@/core/theme';
import HeaderBack from '@/components/header/back';

const DiscoveryTopicDetailHeader = props => {
  const {data} = props;
  const {title, createtime} = data;
  const {styles} = useTheme();
  return (
    <View
      style={[styles.mb_3, styles.bg_foreground, styles.border_b, styles.pb_3]}>
      <Text
        style={[
          styles.text_bold,
          styles.text_leading,
          styles.text_md,
          styles.mb_2,
        ]}>
        {title}
      </Text>
      <Text style={[styles.text_content_secondary, styles.text_sm]}>
        {DateTime.format(createtime, DateTime.FORMATER_DATETIME)}
      </Text>
    </View>
  );
};

const DiscoveryTopicDetailScreen = ({navigation, route}: any) => {
  const {styles, styleConfig} = useTheme();
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  const data: any = route.params;

  const {id: topicId} = data;

  useEffect(() => {
    dispatch({
      type: 'topic/getDetail',
      payload: {
        id: topicId,
      },
    });
  }, [dispatch, topicId]);

  const {detail: topicDetail} = useSelector((state: any) => state.topic);
  // const loading = useSelector(
  //   (state: any) => state.loading.effects['topic/getDetail'],
  // );

  const {content = ''} = topicDetail;

  console.info(topicDetail);

  return (
    <View style={[styles.screen_container, styles.bg_foreground]}>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.p_4]}>
        <DiscoveryTopicDetailHeader data={topicDetail} />
        <MarkdownRender content={content} />
      </ScrollView>
    </View>
  );
};

export default DiscoveryTopicDetailScreen;
