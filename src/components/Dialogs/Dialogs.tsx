import React from "react";
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

export type PropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type NewMessageBodyType = {
    newMessageBody: string
}

function Dialogs(props: PropsType) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    function addNewMessage(values: any) {
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Redirect to='/login'/>;

    return (
        <div className={dialogStyles.dialogs}>

            <div className={dialogStyles.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dialogStyles.messages}>
                <div>{messagesElements}</div>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

export default Dialogs;