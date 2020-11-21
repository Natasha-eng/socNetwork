import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../redux/state";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes ) => void
}

function Dialogs(props: PropsType) {

    let state = props.store.getState().DialogsPage;

    let dialogsElements =state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body));
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;