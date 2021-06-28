import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';

const CoinDetailNews = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.mt_3]}>
      <View style={[styles.bg_foreground, styles.p_4]}>
        <View style={[styles.mb_1]}>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            15:32
          </Text>
        </View>

        <View style={[styles.mb_1]}>
          <Text style={[styles.text_md, styles.text_leading, styles.text_bold]}>
            USDT 筹码分布从较为集中变为高度集中
          </Text>
        </View>

        <View style={[styles.mb_1]}>
          <Text style={[styles.text_md, styles.text_content]}>
            根据 LongHash 大数据监控，USDT
            筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
            集中于 Huobi 交易所。
          </Text>
        </View>

        <View>
          <Text style={[styles.text_sm, styles.text_content_secondary]}>
            Twitter
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailNews;
