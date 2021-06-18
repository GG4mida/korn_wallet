import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';

import {IconBuyIn, IconSell} from '@/components/icons';

interface IProps {
  handleBuyInPress: () => void;
  handleSellPress: () => void;
}

const CoinDetailAction = (props: IProps) => {
  const {handleBuyInPress, handleSellPress} = props;
  const {styles, styleConfig} = useTheme();

  return (
    <View
      style={[
        styles.border_t,
        styles.py_5,
        styles.bg_foreground,
        styles.flex_container_between,
      ]}>
      <TouchableOpacity
        onPress={handleBuyInPress}
        activeOpacity={0.5}
        style={[styles.flex_container_center, styles.w_1_2, styles.border_r]}>
        <IconBuyIn width={16} height={16} fill={styleConfig.color.green} />
        <Text style={[styles.text_md, styles.text_content, styles.ml_2]}>
          买入
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSellPress}
        activeOpacity={0.5}
        style={[styles.flex_container_center, styles.w_1_2]}>
        <IconSell width={16} height={16} fill={styleConfig.color.red} />
        <Text style={[styles.text_md, styles.text_content, styles.ml_2]}>
          卖出
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoinDetailAction;
