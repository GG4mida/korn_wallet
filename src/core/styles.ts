import {StyleSheet} from 'react-native';

import {getColor} from './tailwind';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: getColor('gray-200'),
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: getColor('green-500'),
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    minWidth: 156,
  },
  loadingMask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default styles;
