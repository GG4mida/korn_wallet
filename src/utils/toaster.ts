import Toast from 'react-native-root-toast';

const show = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: 50,
    animation: true,
    hideOnPress: true,
    delay: 0,
    shadow: false,
  });
};

export default {
  show,
};
