import React from "react";
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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


export default connect(mapStateToProps, {logout})(HeaderContainer)