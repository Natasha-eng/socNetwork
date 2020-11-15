let rerenderEntireTree = (state: RootStateType) => {
    console.log("state changed");
}

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
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    Sidebar: SidebarType
}

export type SidebarType = {}


let state: RootStateType = {
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
        ]
    },
    Sidebar: {}
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.ProfilePage.newPostText,
        likesCount: 0
    }
    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.ProfilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
}


export default state;