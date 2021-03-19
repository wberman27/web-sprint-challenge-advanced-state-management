import {SMURF_FETCH_START, SMURF_FETCH_SUCCESS, SMURF_FETCH_FAILURE, SMURF_ADD, SMURF_ERROR} from '../actions'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SMURF_FETCH_START:
            //set loading value to true to show loading on start of fetch
            return {
                ...state,
                isLoading: true
            }
            //on fetch success set smurfs array to payload from endpoint
        case SMURF_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
            //on fetch failure give error message
        case SMURF_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SMURF_ADD:
            //add payload given to addSmurf to smurfs array
            return {
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, action.payload]

            }
        case SMURF_ERROR:
            //set error message to payload given to setError
            return {
                ...state,
                isLoading: false,
                error: `${action.payload}`
            }
        default: 
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.