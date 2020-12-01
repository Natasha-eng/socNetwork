import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type PropsType = {
    //store: StoreReduxType
}

function DialogsContainer() {

    return (
        <StoreContext.Consumer>{
            (store) => {
            let state =store.getState().DialogsPage;

            let onSendMessageClick = () => {
            store.dispatch(sendMessageAC());
        }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;