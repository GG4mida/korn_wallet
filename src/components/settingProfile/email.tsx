import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles, styleConfig} from '@/styles';

const SettingEmail = (props: any) => {
  const {value, onChange} = props;
  return (
    <View style={[styles.mb_3]}>
      <View style={[styles.bg_foreground]}>
        <Text
          style={[
            styles.text_md,
            styles.text_content,
            styles.px_4,
            styles.my_2,
          ]}>
          电子邮箱
        </Text>
        <TextInput
          style={[
            styles.border_t,
            styles.border_b,
            styles.bg_foreground,
            styles.py_3,
            styles.px_4,
          ]}
          maxFontSizeMultiplier={2}
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          textContentType="username"
          onChangeText={onChange}
          placeholder="电子邮箱..."
          placeholderTextColor={styleConfig.color.hint}
          value={value}
        />
      </View>
      <Text
        style={[styles.px_4, styles.my_2, styles.text_sm, styles.text_hint]}>
        完善电子邮箱地址可用于找回密码
      </Text>
    </View>
  );
};

export default SettingEmail;
