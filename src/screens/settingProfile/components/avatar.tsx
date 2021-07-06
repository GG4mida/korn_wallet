import React, {useEffect, useMemo} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {shuffle} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@/hooks';

const SettingProfileAvatarItem = (props: any) => {
  const {item, onChange} = props;
  const {styles} = useTheme();
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

const SettingProfileAvatarList = (props: any) => {
  const {loading, data, onChange} = props;
  const {styles, styleConfig} = useTheme();
  if (loading === true) {
    return (
      <View style={[styles.py_4]}>
        <ActivityIndicator color={styleConfig.color.hint} />
      </View>
    );
  }

  if (data.length === 0) {
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
      data={data}
      contentContainerStyle={[styles.px_3, styles.pb_3]}
      renderItem={(attr: any) => (
        <SettingProfileAvatarItem {...attr} onChange={onChange} />
      )}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name}
    />
  );
};

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

  const avatarsShuffle = useMemo(() => {
    return shuffle(avatars);
  }, [avatars]);

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
        <SettingProfileAvatarList
          loading={loading}
          data={avatarsShuffle}
          onChange={onChange}
        />
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
