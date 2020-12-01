import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    Sidebar: sidebarReducer
});

export type RootStateRedux = ReturnType<typeof reducers>

let store: Store = createStore(reducers);

export default store;