import API_CONST from "../Constants/APIConstants";

export const getMovieList = data => {
  return {
    type: API_CONST.N_GET_MOVIE_LIST,
    data
  };
};
