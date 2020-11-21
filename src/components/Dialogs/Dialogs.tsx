import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



type PropsType = {
    store: DialogsPageType
}

function Dialogs(props:PropsType) {


    let dialogsElements = props.store.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.store.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

            <textarea></textarea><button>Add Message</button>
        </div>
    )
}

export default Dialogs;