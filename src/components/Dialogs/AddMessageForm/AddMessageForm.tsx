import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import messageFormStyles from "./AddMessageForm.module.css";

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm: React.FunctionComponent<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={messageFormStyles.messageFormContainer}>

            <div>
                <Field component = {Textarea} validate = {[required,maxLength50]} name = "newMessageBody" placeholder = "Write your message" />
            </div>

            <button className={messageFormStyles.messageButton}>Send</button>

        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

