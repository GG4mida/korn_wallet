import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {klineTab, klineTabs} from '@/constants/tab';
import useTheme from '@/core/theme';

interface IProps {
  value: klineTab;
  onChange: any;
}

const CoinKlineBarItem = (props: any) => {
  const {value, data, onChange} = props;
  const {styles} = useTheme();

  const itemStyle: any = [
    styles.rounded_full,
    styles.px_4,
    styles.border,
    customStyle.bar_item,
  ];

  let labelStyle = [styles.text_content_secondary];

  if (data.name === value) {
    itemStyle.push(...[styles.bg_red]);
    labelStyle = [styles.text_white];
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onChange(data.name)}
      style={itemStyle}>
      <Text style={labelStyle}>{data.label}</Text>
    </TouchableOpacity>
  );
};

const CoinKlineBarList = (props: any) => {
  const {value, onChange} = props;
  return (
    <React.Fragment>
      {klineTabs.map((tabItem: any, index: number) => {
        return (
          <CoinKlineBarItem
            data={tabItem}
            value={value}
            key={`bar_${index}`}
            onChange={onChange}
          />
        );
      })}
    </React.Fragment>
  );
};

const CoinKlineBar = (props: IProps) => {
  const {value, onChange} = props;
  const {styles} = useTheme();
  return (
    <View
      style={[
        styles.flex_container_between,
        styles.border_b,
        styles.px_3,
        styles.py_2,
      ]}>
      <CoinKlineBarList value={value} onChange={onChange} />
    </View>
  );
};

const customStyle = StyleSheet.create({
  bar_item: {
    paddingVertical: 8,
  },
});

export default CoinKlineBar;
