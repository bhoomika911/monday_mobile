/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * File : CommonFunctions.js
 * Date : 19/01/2019
 * Updated date : 19/01/2019
 * Comment : All the required methods which can be access globally throughout the app after importing.
 ****************************************************************************************************************/

import Moment from "moment";
import {
  NativeModules,
  Platform,
  AsyncStorage,
  Dimensions,
  NetInfo
} from "react-native";
let SharedPreferences = require("react-native-shared-preferences");
const window = Dimensions.get("window");

//validateEmail
const validateEmail = email => {
  var re = /^(([^<>()\[\]\\,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//validateEmailORPhone
const validateEmailORPhone = email => {
  var re = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
  return re.test(email);
};

//validatePassword
const validatePassword = pass => {
  if (pass.length < 8) {
    return false;
  } else {
    return true;
  }
};

//validateMobileNumber
const validateMobileNumber = number => {
  var re = /([0-9]{10})/;
  return re.test(number);
};

//titleCase
const titleCase = str => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

//check interner connction
const checkInternetConnection = async (callback) => {
  if (Platform.OS === "ios") {
    // let isConnected = await fetch("https://www.google.com");
    let probablyHasInternet;
    try {
      const googleCall = await fetch(
          'https://google.com', {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: 0,
          },
        });
      probablyHasInternet = googleCall.status === 200;
    } catch (e) {
      probablyHasInternet = false;
    }
    callback(probablyHasInternet);
  } else {
    NetInfo.isConnected.fetch().done((isConnected) => {
      callback(isConnected);
    });
  }
}

export {
  validateEmail,
  validateEmailORPhone,
  validatePassword,
  validateMobileNumber,
  titleCase,
  checkInternetConnection,
};
