import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {addPostAC, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>
|
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setAuthUserData>|
    ReturnType<typeof toggleFollowingProgress>


const reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Sidebar: sidebarReducer,
    Auth: authReducer
});



export type RootStateRedux = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

type Window = typeof window & { store: Store }
(window as Window).store = store;

export default store;