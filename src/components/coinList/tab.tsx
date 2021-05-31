import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {coinTabs} from '@/constants/tab';
import {styles} from '@/styles';

const CoinTabItem = (props: any) => {
  const {data, value, onChange} = props;
  let containerStyle = null;
  let textStyle = null;
  if (data.name === value) {
    containerStyle = [
      styles.flex_container_center,
      styles.px_5,
      styles.bg_red,
      styles.rounded_2xl,
      customStyles.tab_item,
    ];
    textStyle = [styles.text_white];
  } else {
    containerStyle = [
      styles.flex_container_center,
      styles.px_5,
      styles.rounded_2xl,
      customStyles.tab_item,
    ];
    textStyle = [styles.text_content];
  }
  return (
    <TouchableOpacity
      onPress={() => onChange(data.name)}
      activeOpacity={0.5}
      style={containerStyle}>
      <Text style={textStyle}>{data.label}</Text>
    </TouchableOpacity>
  );
};

const CoinTabList = (props: any) => {
  const {value, onChange} = props;
  return (
    <React.Fragment>
      {coinTabs.map((tabItem: any, index: number) => {
        return (
          <CoinTabItem
            data={tabItem}
            value={value}
            onChange={onChange}
            key={`tab_${index}`}
          />
        );
      })}
    </React.Fragment>
  );
};

const CoinTab = (props: any) => {
  const {value, onChange} = props;
  return (
    <View
      style={[
        styles.flex_container_center,
        styles.bg_screen,
        styles.border_b,
        styles.py_3,
      ]}>
      <View
        style={[
          styles.flex_row,
          styles.bg_white,
          styles.border_b,
          styles.rounded_3xl,
        ]}>
        <CoinTabList value={value} onChange={onChange} />
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  tab_item: {
    paddingVertical: 8,
  },
});

export default CoinTab;
