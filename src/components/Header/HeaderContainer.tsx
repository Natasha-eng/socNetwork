import React from "react";
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component<any> {
    componentDidMount() {
       this.props.getAuthUserData();
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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)