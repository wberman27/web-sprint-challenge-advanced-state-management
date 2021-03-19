import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const SMURF_FETCH_START = 'SMURF_FETCH_START'
export const SMURF_FETCH_SUCCES = 'SMURF_FETCH_SUCCES'
export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE'
export const SMURF_ADD = 'SMURF_ADD'
export const SMURF_ERORR = 'SMURF_ERROR'

