import {FETCH_RESULTS_SUCCESS, FETCHING_REQUEST, FETCH_RESULTS_FAILURE} from '../actions/action';

const initState = {
  titles: [],
  infos: [],
  links: [],
}

export default (state = initState, action) => {
  switch(action.type) {
    case FETCHING_REQUEST:
      return {...state, isLoading: true};
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        titles: action.payload[1],
        infos: action.payload[2],
        links: action.payload[3],
      };
    case FETCH_RESULTS_FAILURE:
      return {...state, isLoading: true, errorMessage: action.payload};
    default: 
      return state;
  }
}

