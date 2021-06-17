import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import useTheme from '@/core/theme';
import DiscoveryItem from './item';

const DiscoveryContent = (props: any) => {
  const {styles} = useTheme();
  const {data, col, loading, handlePress} = props;
  if (loading === true) {
    return (
      <View style={[styles.flex_container_center, styles.flex_1, styles.py_5]}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!data || data.length === 0) {
    return (
      <View style={[styles.flex_container_center, styles.flex_1, styles.py_5]}>
        <Text style={[styles.text_hint, styles.text_md]}>暂无数据</Text>
      </View>
    );
  }
  return (
    <React.Fragment>
      {data.map((item: any, index: number) => {
        return (
          <DiscoveryItem
            data={item}
            key={`item_${index}`}
            col={col}
            handlePress={handlePress}
          />
        );
      })}
    </React.Fragment>
  );
};

const DiscoveryGroup = (props: any) => {
  const {styles} = useTheme();
  const {data, handlePress, col, loading} = props;
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
        <DiscoveryContent
          data={items}
          col={col}
          loading={loading}
          handlePress={handlePress}
        />
      </View>
    </View>
  );
};

export default DiscoveryGroup;
