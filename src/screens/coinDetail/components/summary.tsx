import React from 'react';
import {View, Text, Image} from 'react-native';
import {Formater} from '@/utils';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useTheme} from '@/hooks';

const CoinSummary = () => {
  const {styles} = useTheme();
  const route = useRoute();
  const coin: any = route.params;
  const {name, symbol, logo_png} = coin;
  const {list: marketList} = useSelector((state: any) => state.market);
  const {exchange} = useSelector((state: any) => state.exchange);
  const marketInfo = marketList[symbol];
  const {c: marketPrice, P: marketChange} = marketInfo;
  const marketPriceCNY = parseFloat(marketPrice) * parseFloat(exchange);

  const changeStyle: any = [styles.text_md];
  if (parseFloat(marketChange) > 0) {
    changeStyle.push(styles.text_red);
  } else {
    changeStyle.push(styles.text_green);
  }

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.bg_foreground,
        styles.px_4,
        styles.py_3,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Image
          source={{uri: logo_png}}
          style={[styles.img_coin, styles.rounded_full, styles.mr_3]}
        />
        <View>
          <Text style={[styles.text_md, styles.text_bold, styles.text_content]}>
            {symbol}
          </Text>
          <Text style={[styles.text_md, styles.text_content_secondary]}>
            {name}
          </Text>
        </View>
      </View>

      <View style={[styles.w_1_3, styles.items_end, styles.flex_col]}>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            ¥{Formater.formatAmount(marketPriceCNY)}
          </Text>
        </View>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_md, styles.text_content]}>
            ${Formater.formatAmount(marketPrice)}
          </Text>
        </View>
      </View>
      <View style={[styles.flex_container_center]}>
        <Text style={changeStyle}>{Formater.formatChange(marketChange)}</Text>
      </View>
    </View>
  );
};

export default CoinSummary;
