import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {addPostAC, deletePost, setStatus, setUserProfile} from "./profile-reducer";
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
import {reducer as formReducer} from 'redux-form'
import appReducer, {initializedSuccess} from "./app-reducer";

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setStatus>|
    ReturnType<typeof initializedSuccess> |
    ReturnType<typeof deletePost>


const reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Sidebar: sidebarReducer,
    Auth: authReducer,
    form: formReducer,
    App: appReducer
});


export type RootStateRedux = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

type Window = typeof window & { store: Store }
(window as Window).store = store;

export default store;