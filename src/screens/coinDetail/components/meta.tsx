import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@/hooks';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {IconForward} from '@/components/icons';
import {WebviewScreen} from '@/screens';

const CoinDetailMetaItem = (props: {label: string; url?: string}) => {
  const {label, url} = props;
  const {styles, styleConfig} = useTheme();
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    const params = {
      title: label,
      url,
    };
    navigation.navigate(WebviewScreen.name, params);
  }, [navigation, url, label]);

  if (!url) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>{label}</Text>
      </View>
      <View style={[styles.flex_container_center]}>
        <IconForward width={18} height={18} fill={styleConfig.color.hint} />
      </View>
    </TouchableOpacity>
  );
};

const CoinDetailMetaDescription = (props: {text: string}) => {
  const {styles} = useTheme();
  const {text} = props;

  const paragraphList = text.split('\n');

  return (
    <View style={[styles.px_4, styles.py_2, styles.border_b]}>
      <Text style={[styles.text_md, styles.text_content, styles.mb_1]}>
        简介
      </Text>
      {paragraphList.map((paragraph: string, index: number) => {
        return (
          <Text
            key={`paragraph_${index}`}
            style={[styles.text_md, styles.my_1, styles.text_content]}>
            {paragraph}
          </Text>
        );
      })}
    </View>
  );
};

const CoinDetailMeta = (props: {data: any}) => {
  const {data} = props;
  const {
    description,
    source_code,
    website,
    white_paper,
    explorer,
    research,
  } = data;
  const {styles} = useTheme();
  return (
    <View style={[styles.bg_foreground, styles.mt_3]}>
      <CoinDetailMetaDescription text={description} />
      <CoinDetailMetaItem label="官网" url={website} />
      <CoinDetailMetaItem label="白皮书" url={white_paper} />
      <CoinDetailMetaItem label="研究报告" url={research} />
      <CoinDetailMetaItem label="源代码" url={source_code} />
      <CoinDetailMetaItem label="区块浏览器" url={explorer} />
    </View>
  );
};

export default CoinDetailMeta;
