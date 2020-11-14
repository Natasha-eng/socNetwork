import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number
    name: string
}

function DialogItem(props: DialogItemProps) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + '' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;