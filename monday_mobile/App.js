/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * File : App.js
 * Date : 19/01/2019
 * Updated date : 19/01/2019
 * Comment : Application main components routing/navigation. Navigation bar implementation.
 ****************************************************************************************************************/

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  StatusBarStyle,
  DeviceEventEmitter,
  BackHandler
} from "react-native";
import {
  Actions,
  Router,
  Reducer,
  Scene,
  Tabs
} from "react-native-router-flux";
//import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";
import CommonStyles from "./App/CommonStyle/CommonStyle";

// Screens
import SplashScreen from "./App/code/Components/SplashComponent/SplashScreen";
import MovieListScreen from "./App/code/Components/MovieListComponent/MovieListScreen";


const scenes = Actions.create(
  <Scene
    key="root"
    headerTintColor="#c30823"
    backButtonTextStyle={{ color: "#000", fontSize: 13 }}
    // transitionConfig={() => ({
    //   screenInterpolator: CardStackStyleInterpolator.forHorizontal
    // })}
  >
    <Scene
      key="SplashScreen"
      component={SplashScreen}
      hideNavBar={true}
    />

    <Scene
      key="MovieListScreen"
      component={MovieListScreen}
      hideNavBar={true}
      initial
    />
  </Scene>
);

backPressSubscriptions = [];

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    //-------------- Android hardware back press start --------//
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
    DeviceEventEmitter.addListener("hardwareBackPress", () => {
      let invokeDefault = true;
      const subscriptions = [];

      backPressSubscriptions.forEach(sub => subscriptions.push(sub));

      let index = 0;
      for (let i = 0; i < subscriptions.reverse().length; i += 1) {
        if (subscriptions[i].label == Actions.currentScene) {
          index = i;
          invokeDefault = false;
          backPressSubscriptions.pop();
          break;
        }
      }

      if (invokeDefault) {
        BackHandler.exitApp();
      } else {
        subscriptions[index].backFn();
      }
    });
    //-------------- Android hardware back press end --------//
    // alert();
    //
    // this._getUserProfileProperty();
    // //-------------- Cleaver tap -enable push notification --------//
    // CleverTap.profileSet({'Name': 'Bhumi', "MSG-push" : true});
    // //-------------- Android hardware back press end --------//
  };

  componentWillUnmount = () => {
    //********************** Android back press start *****************//
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
    //********************** Android back press end *****************//
  };

  render() {
    return <Router scenes={scenes} />;
  }
}
