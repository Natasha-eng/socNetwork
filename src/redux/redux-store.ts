import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

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