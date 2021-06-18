import React from 'react';
import {Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';

interface IProps {
  loading?: boolean;
  text?: string;
  handlePress: () => void;
}

const HeaderSubmit = (props: IProps) => {
  const {styles} = useTheme();
  const {handlePress, loading, text = '提交'} = props;
  if (loading === true) {
    return (
      <View style={[styles.flex_container_center, styles.px_3]}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={[styles.flex_container_center, styles.px_3]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
        <Text style={[styles.text_md, styles.text_red]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSubmit;
