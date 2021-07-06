import React, {useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MarkdownRender from '@/components/markdown';
import {DateTime, String} from '@/utils';
import {useTheme} from '@/hooks';
import {ScreenType} from '@/constants/enum';

const TopicDetailHeader = (props: any) => {
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

const TopicDetailScreen = ({route}: any) => {
  const {styles, styleConfig} = useTheme();
  const dispatch = useDispatch();
  const {id: topicId}: any = route.params;

  useEffect(() => {
    dispatch({
      type: 'topic/getDetail',
      payload: {
        id: topicId,
      },
    });
  }, [dispatch, topicId]);

  const {detail: topicDetail} = useSelector((state: any) => state.topic);
  const {content = ''} = topicDetail;

  const loading = useSelector(
    (state: any) => state.loading.effects['topic/getDetail'],
  );

  if (loading === true) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <ActivityIndicator color={styleConfig.color.hint} />
      </View>
    );
  }

  return (
    <View style={[styles.screen_container, styles.bg_foreground]}>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.p_4]}>
        <TopicDetailHeader data={topicDetail} />
        <MarkdownRender content={content} />
      </ScrollView>
    </View>
  );
};

export default {
  name: String.getRandomString(),
  title: '文章详情',
  screen: TopicDetailScreen,
  type: [ScreenType.STACK],
};
