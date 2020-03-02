import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';
import Header from './Components/Header';

console.tron.log('Hello World');

export default function App() {
  return (
    <>
      <Header />
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </>
  );
}
