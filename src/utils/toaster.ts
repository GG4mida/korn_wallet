import Toast from 'react-native-root-toast';

const show = (message: string, config: any = {}) => {
  const defaultConfig = {
    duration: Toast.durations.SHORT,
    position: 50,
    animation: true,
    hideOnPress: true,
    delay: 0,
    shadow: false,
  };

  Toast.show(message, {...defaultConfig, ...config});
};

export default {
  show,
};
