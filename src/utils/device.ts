import DeviceInfo from 'react-native-device-info';

const getUniqueId = (): string => {
  return DeviceInfo.getUniqueId();
};

export default {
  getUniqueId,
};
