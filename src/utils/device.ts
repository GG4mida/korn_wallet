import DeviceInfo from 'react-native-device-info';

const getUniqueId = (): string => {
  return DeviceInfo.getUniqueId();
};

const getVersion = () => {
  return DeviceInfo.getVersion();
};

export default {
  getUniqueId,
  getVersion,
};
