import React from "react";
import classes from './../Dialogs.module.css';

type MessageProps = {
    message: string
}

function Message(props: MessageProps) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;