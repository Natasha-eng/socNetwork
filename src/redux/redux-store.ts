import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import usersReducer, {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "./users-reducer";

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setUsersTotalCountAC>

let reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    Sidebar: sidebarReducer
});

export type RootStateRedux = ReturnType<typeof reducers>

let store: Store = createStore(reducers);

type Window = typeof window & {store: Store}
(window as Window).store = store;

export default store;