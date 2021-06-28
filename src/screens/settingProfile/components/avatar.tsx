import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@/hooks';

const SettingProfileAvatar = (props: any) => {
  const {styles} = useTheme();
  const {value, onChange} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'system/avatars',
    });
  }, [dispatch]);

  const {avatars} = useSelector((state: any) => state.system);
  const loading = useSelector(
    (state: any) => state.loading.effects['system/avatars'],
  );

  const renderItem = (data: any) => {
    const {item} = data;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onChange(item.url)}
        style={[styles.m_1]}>
        <Image
          source={{
            uri: item.url,
          }}
          style={[customStyles.avatar, styles.rounded_full]}
        />
      </TouchableOpacity>
    );
  };

  const renderList = () => {
    if (loading === true) {
      return (
        <View style={[styles.py_4]}>
          <ActivityIndicator />
        </View>
      );
    }

    if (avatars.length === 0) {
      return (
        <View style={[styles.py_4]}>
          <Text style={[styles.text_sm, styles.text_hint, styles.text_center]}>
            未获取到头像数据
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={avatars}
        contentContainerStyle={[styles.px_3, styles.pb_3]}
        renderItem={renderItem}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
      />
    );
  };

  return (
    <View style={[styles.mb_3]}>
      <View style={[styles.bg_foreground]}>
        <View style={[styles.flex_container_between, styles.px_4, styles.my_2]}>
          <Text style={[styles.text_md, styles.text_content]}>头像</Text>
          <Image
            source={{uri: value}}
            style={[styles.rounded_full, styles.img_header]}
          />
        </View>
        {renderList()}
      </View>
      <Text
        style={[styles.px_4, styles.my_2, styles.text_sm, styles.text_hint]}>
        横向滚动可查看更多头像
      </Text>
    </View>
  );
};

const customStyles = StyleSheet.create({
  avatar: {
    width: 36,
    height: 36,
  },
});

export default SettingProfileAvatar;
