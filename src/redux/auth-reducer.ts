import {ActionsTypes} from "./redux-store";

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

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA, data: {
        userId,
        email,
        login
    }
}) as const

export default authReducer;