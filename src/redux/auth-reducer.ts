import {ActionsTypes, RootStateRedux} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

export type InitialAuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialAuthPageType = initialState, action: ActionsTypes): InitialAuthPageType => {
    switch (action.type) {
        case SET_USER_DATA:
            let a = {
                ...state,
                ...action.payload
            }

            return a

        default:
            return state;
    }
}

export default authReducer;

//ActionCreators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {
        userId,
        email,
        login,
        isAuth
    }
}) as const

//thunks
export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export type ThunkType = ThunkAction<void, RootStateRedux, unknown, ActionsTypes>;
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}