import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';

import SortAscSvg from '@/assets/svg/sortAsc.svg';
import SortDescSvg from '@/assets/svg/sortDesc.svg';
import SortNoneSvg from '@/assets/svg/sortNone.svg';

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

const SorterIcon = (props: any) => {
  const {rule, name, item} = props;
  const {name: itemName} = item;
  const fillSize = 12;
  const fillColor = getColor('gray-500');
  if (name === itemName) {
    if (rule === SortRule.ASC) {
      return <SortAscSvg fill={fillColor} width={fillSize} height={fillSize} />;
    }
    if (rule === SortRule.DESC) {
      return (
        <SortDescSvg fill={fillColor} width={fillSize} height={fillSize} />
      );
    }
  }
  return <SortNoneSvg fill={fillColor} width={fillSize} height={fillSize} />;
};

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
            <SorterIcon rule={rule} name={name} item={sortItem} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Sorter;
