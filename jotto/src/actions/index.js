import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS:"CORRECT_GUESS"
}

export function correctGuess() {
    return {type: actionTypes.CORRECT_GUESS}
}

export const getSecretWord = () => {
    return (dispatch) => {
      return axios.get('http://localhost:3030')
        .then(response => {
          dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data
          });
        });
    }
  }