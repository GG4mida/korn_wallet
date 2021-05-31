import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconSortAsc, IconSortDesc, IconSortNone} from '@/components/icons';
import {SortRule, SortField} from '@/constants/enum';
import {styles, styleConfig} from '@/styles';

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
  const fillColor = styleConfig.color.gray_500;
  if (name === itemName) {
    if (rule === SortRule.ASC) {
      return (
        <IconSortAsc fill={fillColor} width={fillSize} height={fillSize} />
      );
    }
    if (rule === SortRule.DESC) {
      return (
        <IconSortDesc fill={fillColor} width={fillSize} height={fillSize} />
      );
    }
  }
  return <IconSortNone fill={fillColor} width={fillSize} height={fillSize} />;
};

const CoinSorter = (props: any) => {
  const {sorter, onChange} = props;
  const {name, rule} = sorter;

  const handleSortPress = useCallback(
    (item: any) => {
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
    },
    [name, onChange, rule],
  );

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.bg_foreground,
        styles.border_b,
        styles.px_4,
        styles.py_2,
      ]}>
      {SORT_HEADERS.map((sortItem: any, index: number) => {
        const style: any = [
          styles.flex_1,
          styles.flex_row,
          styles.items_center,
        ];
        if (index > 0) {
          style.push(styles.justify_end);
        }
        return (
          <TouchableOpacity
            key={`sorter_${index}`}
            onPress={() => handleSortPress(sortItem)}
            activeOpacity={0.5}
            style={style}>
            <Text style={[styles.text_sm, styles.text_hint]}>
              {sortItem.label}
            </Text>
            <SorterIcon rule={rule} name={name} item={sortItem} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CoinSorter;
