// /** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent(appName, () => App);
//

/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * Updated date : 19/01/2019
 * Comment : Setting up store and Redux as middleware.
 ****************************************************************************************************************/

import {name as appName} from './app.json';
import { AppRegistry, YellowBox } from "react-native";
import App from "./App";

import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./App/Store/configureStore";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
