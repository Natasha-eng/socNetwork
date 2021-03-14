import {ActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

export type InitialProfileState = {
    posts: Array<PostType>
    profile: null | UserProfileResponseType
    status: string
}

export type UserProfileResponseType = {
    aboutMe: string
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState: InitialProfileState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 14},
        {id: 3, message: "BalBla", likesCount: 14},
        {id: 4, message: "DaDa", likesCount: 14}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: InitialProfileState = initialState, action: ActionsTypes): InitialProfileState => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId)
            }
        default:
            return state;
    }
}

//actions
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: UserProfileResponseType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const deletePost = (postId: number) => ({type: DELETE_POST, postId}) as const


//Thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
        .catch(e => {
            console.log(e)
        })
}

export default profileReducer;