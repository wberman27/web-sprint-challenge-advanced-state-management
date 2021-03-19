import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const SMURF_FETCH_START = 'SMURF_FETCH_START'
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS'
export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE'
export const SMURF_ADD = 'SMURF_ADD'
export const SMURF_ERROR = 'SMURF_ERROR'

export const fetchSmurfs = (array) =>{
    return(dispatch) =>{

        //trigger loading display
        dispatch({type:SMURF_FETCH_START})


        //get smurf data from server
        axios.get(`http://localhost:3333/smurfs`)
        .then(res =>{
            console.log(res)
            dispatch({type:SMURF_FETCH_SUCCESS, payload: res})
        })
        .catch(err =>{
            console.log("THIS IS A FETCH DATA ERROR: ", err)
            dispatch({type:SMURF_FETCH_FAILURE, payload: err.message})
        })

    }
}

export const addSmurf = (obj) =>{
    //add new smurf obj
    return (dispatch) =>{
        dispatch({type: SMURF_ADD, payload: obj})
    }
}

export const setError = (string) =>{
    //set value of error message
    return (dispatch) =>{
        dispatch({type: SMURF_ERROR, payload: string})
    }
}