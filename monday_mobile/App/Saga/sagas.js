/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * File : sagas.js
 * Date : 19/01/2019
 * Updated date : 14/08/2018
 * Comment : All the API call will be done here.
 ****************************************************************************************************************/

import {
  put,
  call,
  takeEvery,
  takeLatest,
  select,
  cps
} from "redux-saga/effects";
import API from "../Constants/APIUrls";
import API_CONST from "../Constants/APIConstants";
import ACTION_TYPES from "../Action/ActionsType";
// import RNFetchBlob from "react-native-fetch-blob";

//Call for fetching data from api
const _apiCall = (url, data) => {
  return fetch(url, data)
    .then(res => {
      return { res: res, res_json: res.json() };
    })
    .catch(e => {
      throw e;
    });
};

//Call for fetching blob data from api
const _blobApiCall = (baseUrl, tokenId) => {
  // send http request in a new thread (using native code)
  return (
    RNFetchBlob.fetch("GET", baseUrl, {
      tokenId: tokenId
      // more headers  ..
    })
      // when response status code is 200
      .then(res => {
        return res.base64();
      })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        console.log("errorMessage", errorMessage);
        // error handling
        return errorMessage;
      })
  );
};

//get response json
const _extJSON = p => {
  return p.then(res => res);
};

//getMovieList
function* getMovieList(action) {
  debugger;

  var serviceURL = action.data.serviceURL;

  let method = action.data.method;
  console.log("======getMovieList=========");
  console.log(serviceURL);
  console.log("====================================");

  try {
    let response = yield call(_apiCall, serviceURL, {
      method: method
    });

    var responseJSON = yield call(_extJSON, response.res_json);
    var responseData = {
      data: responseJSON,
      headerResponse: response.res
    };

    console.log("**************************************************");
    console.log("Received headerResponse getMovieList API: ");
    console.log(JSON.stringify(responseData.headerResponse));
    console.log("Received data getMovieList API: ");
    console.log(JSON.stringify(responseData.data));
    console.log("**************************************************");
    yield put({
      type: ACTION_TYPES.GET_MOVIE_LIST,
      payload: responseData
    });
  } catch (e) {
    console.log("Error: " + e);
    var responseData = {
      isError: true,
      data: "" + e
    };
    yield put({
      type: ACTION_TYPES.GET_MOVIE_LIST,
      payload: responseData
    });
  }
}

function* rootSaga() {
  yield takeLatest(API_CONST.N_GET_MOVIE_LIST, getMovieList);
}
export default rootSaga;
