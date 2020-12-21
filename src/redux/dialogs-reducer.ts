import { DialogsPageType} from "./store";
import {ActionsTypes} from "./redux-store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW-MESSAGE+BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const updateNewMessageBodyAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text}) as const
export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const


export default dialogsReducer;