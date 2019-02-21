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
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import commonStyle from '../../../CommonStyle/CommonStyle';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";
import Colors from "../../../Constants/Colors";
import API from "../../../Constants/APIUrls";
import {
  setItem
} from "../../../Constants/CommonFunctions";
import {
  getItem,
  storeLogFile,
} from "../../../Constants/CommonFunctions";
import {
  getMovieList
} from "./../../../Action/ActionCreators";
import {
  clearMoveListRes
} from "./MovieListAction";
import Moment from "moment";
import { setLanguage } from "../../../Constants/Strings";
import styles from "./MovieListStyle";
import IMAGES from "../../../Constants/Images";

Strings = {};

let self;

class MovieListScreen extends Component {
  constructor() {
    super();

    self =this;
    this.state = {
      isScreenLoading : true,
      movieList : []
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

    debugger;
    this.callGetMovieListWebService();
  }

  componentWillReceiveProps(nextProps) {
    // Handle  loginUser response
    if (nextProps.getMovieListRes != undefined && nextProps.getMovieListRes != '') {
      debugger;
      if (nextProps.getMovieListRes.isError) {
        this.setState({
          isScreenLoading : false
        });
        alert("Sorry, something went wrong.");
        return false;
      } else if(nextProps.getMovieListRes.headerResponse.status == 200){
        debugger;

        console.log("nextProps.getMovieListRes==>",nextProps.getMovieListRes);
        let movieList = nextProps.getMovieListRes.data.movies;

        this.setState({
          movieList : movieList,
          isScreenLoading : false
        });
      }else{
        this.setState({
          isScreenLoading : false
        });
        let errorMsg = nextProps.getMovieListRes.data.message;
        alert(errorMsg);
      }
    }
  }

  callGetMovieListWebService(){
    debugger;

    let serviceURL = API.GET_MOVIE_LIST;

    let payload = {
      serviceURL : serviceURL,
      method : "GET"
    }

    this.props.getMovieList(payload);
  }

  componentWillUnmount() {}

  componentDidUpdate() {
   if (this.props.getMovieListRes != undefined && this.props.getMovieListRes != '') {
     this.props.clearMoveListRes();
   }
 }

  render() {
    let {movieList} = this.state;

    return (
      <View style={styles.mainContainer}>
        {
          movieList.length > 0 ?
          (
            movieList.map(function(objMovie){
              return <Text>{objMovie.title}</Text>
            })
          )
          :
          null
        }

        {
         this.state.isScreenLoading?
           <View style={commonStyle.circles}>
             <ActivityIndicator size="large" color="rgba(0,0,0,0.3)" />
           </View>
           :null
       }
      </View>
    );
  }
}

const mapStateToProps = ({ movieListReducer }) => {
  const {
  	getMovieListRes
  } = movieListReducer;

  return {
  	getMovieListRes: getMovieListRes,
  }
}

export default connect(mapStateToProps,{
	getMovieList,
  clearMoveListRes
})(MovieListScreen);
