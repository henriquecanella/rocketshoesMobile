import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import store from './store';

import Routes from './routes';

console.tron.log('Hello World');

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}
