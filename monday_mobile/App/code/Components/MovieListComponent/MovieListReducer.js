import ACTION_TYPES from '../../../Action/ActionsType';

const INITIAL_STATE = {
	getMovieListRes : ''
}

export default 	(state = INITIAL_STATE, action) => {

	switch(action.type){

		case ACTION_TYPES.GET_MOVIE_LIST:
			return {...state, getMovieListRes: action.payload}

		case ACTION_TYPES.CLEAR_MOVIE_LIST:
			return {...state, getMovieListRes: ''}

		default:
			return state;
	}

};
