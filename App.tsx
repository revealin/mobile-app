/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import MainRouter from './src/navigation/mainRouter';

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <MainRouter />
  );
};

export default App;
