import React from 'react';
import {Text, View} from 'react-native';
import useTheme from '@/core/theme';
import DiscoveryItem from './item';

const DiscoveryGroup = (props: any) => {
  const {styles} = useTheme();
  const {data, col} = props;
  const {title, descr, items} = data;

  return (
    <View style={[styles.my_3]}>
      <Text
        style={[styles.text_md, styles.text_content, styles.mb_1, styles.mx_4]}>
        {title}
      </Text>
      {descr ? (
        <Text
          style={[styles.text_sm, styles.text_hint, styles.mb_1, styles.mx_4]}>
          {descr}
        </Text>
      ) : null}

      <View
        style={[
          styles.bg_foreground,
          styles.px_4,
          styles.py_2,
          styles.mt_1,
          styles.flex_row,
          styles.flex_wrap,
        ]}>
        {items.map((item: any, index: number) => {
          return <DiscoveryItem data={item} key={`item_${index}`} col={col} />;
        })}
      </View>
    </View>
  );
};

export default DiscoveryGroup;
