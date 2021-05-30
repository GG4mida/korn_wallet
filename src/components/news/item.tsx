import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {DateTime} from '@/utils';

const NUM_OF_CONTENT = 3;

const NewsItem = (props: any) => {
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
  const dataTime = DateTime.format(createtime, DateTime.FORMATER_TIME);
  return (
    <View style={tailwind('bg-white rounded-xl p-5 border-b border-gray-50')}>
      <View style={tailwind('mb-2 flex-row items-center justify-between')}>
        <Text style={tailwind('text-sm text-gray-600')}>{dataTime}</Text>
      </View>

      <View style={tailwind('mb-2')}>
        <Text style={tailwind('text-base font-bold text-gray-800')}>
          {title}
        </Text>
      </View>

      <View style={tailwind('mb-2')}>
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
          style={tailwind('text-base text-gray-600')}>
          {content}
        </Text>
      </View>

      {numberOfLines > NUM_OF_CONTENT ? (
        <TouchableOpacity activeOpacity={0.5} onPress={handleCollapsePress}>
          <Text style={tailwind('text-base text-blue-500')}>
            {collapseText}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default NewsItem;
