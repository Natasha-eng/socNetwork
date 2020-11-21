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
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    Sidebar: SidebarType
}

export type SidebarType = {}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW-MESSAGE+BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store: StoreType = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 14},
                {id: 3, message: "BalBla", likesCount: 14},
                {id: 4, message: "DaDa", likesCount: 14}
            ],
            newPostText: "it=kamasutra.com"
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
            ],
            newMessageBody: ""
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
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 5,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0
            }
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.newPostText = "";
            this._onChange();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText
            this._onChange();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.DialogsPage.newMessageBody = action.body
            this._onChange();
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.DialogsPage.newMessageBody;
            this._state.DialogsPage.newMessageBody = "";
            this._state.DialogsPage.messages.push({id: 6, message: body});
            this._onChange();
        }

    }
}

export const addPostAC = () =>( {type:ADD_POST}) as const
export const  updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const updateNewMessageBodyAC = (text: string) => ({type:UPDATE_NEW_MESSAGE_BODY, body: text}) as const
export const sendMessageAC = () => ({type:SEND_MESSAGE}) as const


export default store;

