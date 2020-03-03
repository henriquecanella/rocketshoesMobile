import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';

console.tron.log('Hello World');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </>
  );
}
