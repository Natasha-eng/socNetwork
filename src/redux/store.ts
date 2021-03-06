import profileReducer, {UserProfileResponseType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import { UserType} from "./users-reducer";
import {ActionsTypes} from "./redux-store";
import dialogsReducer from "./dialogs-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | UserProfileResponseType
    status: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}

export type UsersPageType = {
    users: Array<UserType>
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    Sidebar: SidebarType
}

export type SidebarType = {}



export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 14},
                {id: 3, message: "BalBla", likesCount: 14},
                {id: 4, message: "DaDa", likesCount: 14}
            ],
            profile: null,
            status: ''
        },
        DialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Valera"}
            ]
        },
        Sidebar: {}
    },
    _onChange() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._onChange = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)
        this._onChange();
    }
}


