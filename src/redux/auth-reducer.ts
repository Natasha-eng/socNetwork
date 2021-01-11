import {ActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialAuthPageType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialAuthPageType = initialState, action: ActionsTypes): InitialAuthPageType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}



export default authReducer;

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA, data: {
        userId,
        email,
        login
    }
}) as const


export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}