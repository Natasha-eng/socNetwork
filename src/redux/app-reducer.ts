import {ActionsTypes} from "./redux-store";
import {getAuthUserData, ThunkType} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialAppPageType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

const appReducer = (state: InitialAppPageType = initialState, action: ActionsTypes): InitialAppPageType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export default appReducer;

//ActionCreators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

//thunks
export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    promise.then(() => {

        dispatch(initializedSuccess());
    });
}

