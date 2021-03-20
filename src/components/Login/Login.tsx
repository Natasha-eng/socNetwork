import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../../redux/redux-store";
import styles from "../common/FormsControls/FormsControls.module.css";
import loginStyles from "./Login.module.css";

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FunctionComponent<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={loginStyles.fieldBox}>
                <span>Email</span>
               {/* {CreateField("email", "email", [required], Input)}*/}
                 <Field  placeholder={'email'} name={'email'} validate={[required]} component={Input}/>
            </div>
            <div className={loginStyles.fieldBox}>
                <span>Password</span>
                {/*{CreateField("Password", "password", [required], Input,{type: 'password'} )}*/}
                <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]}
                       component={Input}/>
            </div>
            <div className={loginStyles.rememberMe}>
                <Field classname={loginStyles.checkBox} type={'checkbox'} name={'rememberMe'} component={Input}/>
                <label>remember me</label>

            </div>
            <div className={loginStyles.fieldBox}>
                <button>Login</button>
            </div>
            {error && <div className={styles.formSummeryError}>
                {error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

type LoginPropsType = MapDispatchPropsType & MapStatePropsType;

const Login: React.FunctionComponent<LoginPropsType> = (props) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={loginStyles.loginContentBox}>
            <div className={loginStyles.formBox}>
                <h1>login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootStateRedux): MapStatePropsType => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);