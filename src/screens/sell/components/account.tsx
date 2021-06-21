import React from 'react';
import {Text, View} from 'react-native';
import useTheme from '@/core/theme';

interface IProps {
  text: string;
  value: string;
}

const SellAccountItem = (props: IProps) => {
  const {styles} = useTheme();
  const {text, value} = props;

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.border_b,
      ]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        {text}
      </Text>
      <View style={[styles.flex_row, styles.items_center, styles.justify_end]}>
        <Text style={[styles.text_md, styles.text_content]}>{value}</Text>
      </View>
    </View>
  );
};

const SellAccount = () => {
  const {styles} = useTheme();

  return (
    <View style={[styles.mb_3, styles.bg_foreground]}>
      <SellAccountItem text="当前持仓" value="12.3212 BTC" />
      <SellAccountItem text="持仓市值" value="$20000.00" />
    </View>
  );
};

export default SellAccount;
