/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * File : MainReducer.js
 * Date : 19/01/2019
 * Updated date : 14/08/2018
 * Comment : Declaration of combineReducers.
 ****************************************************************************************************************/

import { combineReducers } from "redux";
import MovieListReducer from "../code/Components/MovieListComponent/MovieListReducer";

export default combineReducers({
  movieListReducer: MovieListReducer,

});
