import React from "react";
import './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type AuthResponseType = {
    resultCode: number
    messages: String[],
    data: {
        id: number,
        email: string,
        login: string
    }
}

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: RootStateRedux) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)