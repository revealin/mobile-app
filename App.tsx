/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainRouter from './src/navigation/mainRouter';
import { ModifyUserProfile } from './src/features/userProfile/modifyUserProfile';

const App: () => React$Node = () => {
  return (
    <MainRouter />
  );
};

export default App;
