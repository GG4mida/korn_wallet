import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
    <View style={[customStyles.container]}>
      <TouchableOpacity
        onPress={handleBuyInPress}
        activeOpacity={0.5}
        style={[
          styles.flex_col,
          styles.bg_foreground,
          styles.rounded_full,
          customStyles.item,
        ]}>
        <IconBuyIn width={48} height={48} fill={styleConfig.color.green} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSellPress}
        activeOpacity={0.5}
        style={[
          styles.flex_col,
          styles.bg_foreground,
          styles.rounded_full,
          customStyles.item,
        ]}>
        <IconSell width={48} height={48} fill={styleConfig.color.red} />
      </TouchableOpacity>
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  item: {
    width: 48,
    height: 48,
    marginVertical: 8,
    shadowColor: '#222',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default CoinDetailAction;
