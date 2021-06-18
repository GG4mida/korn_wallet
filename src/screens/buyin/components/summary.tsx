import React from 'react';
import {Text, View} from 'react-native';
import useTheme from '@/core/theme';
import {IconArrowRight} from '@/components/icons';

const BuyInSummary = () => {
  const {styles, styleConfig} = useTheme();

  return (
    <View
      style={[styles.flex_container_between, styles.p_3, styles.bg_foreground]}>
      <Text style={[styles.text_md, styles.text_content_secondary]}>
        买入汇总
      </Text>
      <View style={[styles.flex_row, styles.items_center, styles.justify_end]}>
        <Text style={[styles.text_md, styles.text_content]}>$20000.00</Text>
        <IconArrowRight
          fill={styleConfig.color.content}
          width={16}
          height={16}
          style={[styles.mx_2]}
        />
        <Text style={[styles.text_md, styles.text_content]}>12.3312 BTC</Text>
      </View>
    </View>
  );
};

export default BuyInSummary;
