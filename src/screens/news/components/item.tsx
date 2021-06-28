import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DateTime} from '@/utils';
import {useTheme} from '@/hooks';

const NUM_OF_CONTENT = 3;

const NewsItem = (props: any) => {
  const {styles} = useTheme();
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [collapseText, setCollapseText] = useState('查看全文');
  const [showCollapse, setShowCollapse] = useState(false);

  const handleCollapsePress = useCallback(() => {
    setShowCollapse(!showCollapse);
    if (showCollapse === true) {
      setCollapseText('查看全文');
    } else {
      setCollapseText('收起');
    }
  }, [showCollapse]);

  const handleContentLayout = useCallback(
    e => {
      if (numberOfLines === 0) {
        setNumberOfLines(e.nativeEvent.lines.length);
      }
    },
    [numberOfLines],
  );

  const {data} = props;
  const {createtime, title, content} = data;
  const dateTime = DateTime.format(createtime, DateTime.FORMATER_TIME);
  return (
    <View
      style={[styles.bg_foreground, styles.border_b, styles.px_5, styles.py_3]}>
      <View style={[styles.flex_container_between, styles.mb_1]}>
        <Text style={[styles.text_sm, styles.text_gray_500]}>{dateTime}</Text>
      </View>

      <View style={[styles.mb_1]}>
        <Text style={[styles.text_leading, styles.text_bold, styles.text_md]}>
          {title}
        </Text>
      </View>

      <View style={[styles.mb_1]}>
        <Text
          numberOfLines={
            numberOfLines === 0
              ? undefined
              : showCollapse
              ? numberOfLines
              : NUM_OF_CONTENT
          }
          ellipsizeMode="tail"
          onTextLayout={handleContentLayout}
          style={[styles.text_content, styles.text_md]}>
          {content}
        </Text>
      </View>

      {numberOfLines > NUM_OF_CONTENT ? (
        <TouchableOpacity activeOpacity={0.5} onPress={handleCollapsePress}>
          <Text style={[styles.text_md, styles.text_blue]}>{collapseText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default NewsItem;
