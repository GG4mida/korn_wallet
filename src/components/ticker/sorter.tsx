import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import SortSvg from '@/assets/svg/sort.svg';
import {SortRule, SortField} from '@/constants/enum';

const SORT_HEADERS = [
  {
    name: SortField.NAME,
    label: '币种',
    sort: true,
  },
  {
    name: SortField.PRICE,
    label: '价格',
    sort: true,
  },
  {
    name: SortField.CHANGE,
    label: '涨跌幅',
    sort: true,
  },
];

const Sorter = (props: any) => {
  const {name, rule, onChange} = props;

  const handleSortPress = (item: any) => {
    const {name: sortName} = item;
    let sortRule: any = null;
    if (sortName === name) {
      if (rule === SortRule.DESC) {
        sortRule = SortRule.ASC;
      }
      if (rule === SortRule.ASC) {
        sortRule = SortRule.NONE;
      }
      if (rule === SortRule.NONE) {
        sortRule = SortRule.DESC;
      }
    } else {
      sortRule = SortRule.DESC;
    }

    onChange({
      name: sortName,
      rule: sortRule,
    });
  };

  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-between bg-white border-b border-gray-100 px-5 py-2',
      )}>
      {SORT_HEADERS.map((sortItem: any, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleSortPress(sortItem)}
            activeOpacity={0.5}
            style={tailwind(
              `flex flex-1 flex-row items-center ${
                index > 0 ? 'justify-end' : ''
              }`,
            )}>
            <Text style={tailwind('text-sm text-gray-500')}>
              {sortItem.label}
            </Text>
            <SortSvg fill={getColor('gray-400')} width={16} height={16} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Sorter;
