import React, {Component, FC} from "react";
import styles from './FormsControls.module.css';
import {Field, WrappedFieldProps} from "redux-form";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";
import {FieldValidatorType} from "../../../utils/validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

export const CreateField = (placeholder: string | null, name: string, validators: FieldValidatorType[],
                            component: FC<WrappedFieldProps>, props?: { type: string }) => {
    return <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>
}