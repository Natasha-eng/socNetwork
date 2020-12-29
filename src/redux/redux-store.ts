import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {addPostAC, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollow
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setAuthUserData>


let reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Sidebar: sidebarReducer,
    Auth: authReducer
});

export type RootStateRedux = ReturnType<typeof reducers>

let store: Store = createStore(reducers);

type Window = typeof window & { store: Store }
(window as Window).store = store;

export default store;