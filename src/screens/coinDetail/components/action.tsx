import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@/hooks';

interface IProps {
  handleBuyInPress: () => void;
  handleSellPress: () => void;
}

const ACTION_SIZE = 50;

const CoinDetailAction = (props: IProps) => {
  const {handleBuyInPress, handleSellPress} = props;
  const {styles} = useTheme();
  return (
    <View style={[customStyles.container]}>
      <TouchableOpacity
        onPress={handleBuyInPress}
        activeOpacity={0.8}
        style={[
          styles.flex_col,
          styles.bg_foreground,
          styles.rounded_full,
          styles.bg_green,
          styles.flex_container_center,
          customStyles.item,
        ]}>
        <Text style={[customStyles.item_text]}>买</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSellPress}
        activeOpacity={0.8}
        style={[
          styles.flex_col,
          styles.bg_foreground,
          styles.rounded_full,
          styles.flex_container_center,
          styles.bg_red,
          customStyles.item,
        ]}>
        <Text style={[customStyles.item_text]}>卖</Text>
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
    width: ACTION_SIZE,
    height: ACTION_SIZE,
    marginVertical: 8,
    shadowColor: '#222',
    shadowOpacity: 0.2,
    borderWidth: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  item_text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
});

export default CoinDetailAction;
