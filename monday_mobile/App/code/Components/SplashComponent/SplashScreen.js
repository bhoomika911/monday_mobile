import React, { Component } from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import Colors from "../../../Constants/Colors";
import {
  setItem
} from "../../../Constants/CommonFunctions";
import {
  getItem,
  storeLogFile,
  isWithinAWeek
} from "../../../Constants/CommonFunctions";
import Moment from "moment";
import { setLanguage } from "../../../Constants/Strings";
import styles from "./SplashScreenStyle";
import IMAGES from "../../../Constants/Images";

Strings = {};

let self;

class SplashScreen extends Component {
  constructor() {
    super();

    self =this;
    this.state = {
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    setLanguage("ENGLISH");
    //********************** SET LANGAUGE END**********************//

    // getItem(Strings.kUSERNAME, function(res) {
    //   if (
    //     res.status == "success" &&
    //     res.result !== "" &&
    //     res.result !== null
    //   ) {
    //     let username = res.result;
    //
    //     Actions.LoginScreen({
    //       type: "reset",
    //       hideBack: true,
    //       username: username
    //     });
    //   } else {
    //     Actions.AuthScreen();
    //   }
    // });
  }

  componentWillUnmount() {}

  render() {
    // return (
    //   <View style={styles.mainContainer}>
    //     <Image style={styles.backgroundImg} source={IMAGES.AUTH_BACK_COVER} />
    //   </View>
    // );
    return (
      <View style={styles.mainContainer}>
        <Text> Splash screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
