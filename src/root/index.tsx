import React from 'react';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ViewContainer from '@/components/container';
import RouteContainer from '@/root/route';
import store from '@/root/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <ViewContainer>
            <RouteContainer />
          </ViewContainer>
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
}
