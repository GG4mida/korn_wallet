import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import useTheme from '@/core/theme';

const SettingSubmit = (props: any) => {
  const {styles} = useTheme();
  const {loading, handlePress} = props;
  if (loading === true) {
    return (
      <View style={[styles.flex_container_center, styles.px_4]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={[styles.flex_container_center, styles.px_4]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
        <Text style={[styles.text_md, styles.text_red]}>更新</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingSubmit;
