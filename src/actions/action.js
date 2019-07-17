import axios from 'axios';

export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS';
export const FETCHING_REQUEST = 'FETCHING_REQUEST';
export const FETCH_RESULTS_FAILURE = "FETCH_RESULTS_FAILURE";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const fetchResults = (search) => {
  return (dispatch) => {
      dispatch({type: FETCHING_REQUEST})
      const url = `${proxyurl}https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json`;
      axios
        .get(url)
        .then((response) => {
          dispatch({type: FETCH_RESULTS_SUCCESS, payload: response.data})
        })
        .catch((error) => {
          dispatch({type: FETCH_RESULTS_FAILURE, payload: error})
        });
  }
}