import {ActionsTypes} from "./redux-store";

const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type InitialStateType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

let initialState: InitialStateType = {
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
}

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const


export default dialogsReducer;