import React from "react";
import dialogsStyles from './../Dialogs.module.css';

type MessageProps = {
    message: string
}

function Message(props: MessageProps) {
    return (
        <div className={dialogsStyles.message}>{props.message}</div>
    )
}

export default Message;