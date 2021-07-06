import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formater} from '@/utils';
import {CoinDetailScreen} from '@/screens';
import {useTheme} from '@/hooks';

const CoinItem = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  const {name, symbol, logo_png, priceUSD, priceCNY, change} = data;

  const changeStyle: any = [styles.text_md];
  if (parseFloat(change) > 0) {
    changeStyle.push(styles.text_red);
  } else {
    changeStyle.push(styles.text_green);
  }

  const navigation = useNavigation();
  const handleItemPress = (item: any) => {
    navigation.navigate(CoinDetailScreen.name, item);
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemPress(data)}
      activeOpacity={0.5}
      style={[
        styles.flex_container_center,
        styles.border_b,
        styles.px_4,
        styles.py_3,
        styles.bg_foreground,
      ]}>
      <View style={[styles.w_1_3, styles.flex_row, styles.items_center]}>
        <Image
          source={{uri: logo_png}}
          style={[styles.rounded_full, styles.img_coin, styles.mr_3]}
        />
        <View>
          <Text style={[styles.text_md, styles.text_content, styles.text_bold]}>
            {symbol}
          </Text>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            {name}
          </Text>
        </View>
      </View>

      <View style={[styles.w_1_3, styles.flex_col, styles.items_end]}>
        <Text style={[styles.text_sm, styles.text_content_secondary]}>
          ¥{Formater.formatAmount(priceCNY)}
        </Text>
        <Text style={[styles.text_md, styles.text_content]}>
          ${Formater.formatAmount(priceUSD)}
        </Text>
      </View>

      <View style={[styles.w_1_3, styles.items_end]}>
        <Text style={changeStyle}>{Formater.formatChange(change)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;
