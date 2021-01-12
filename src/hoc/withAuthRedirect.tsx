import React from "react";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../redux/redux-store";
import {connect} from "react-redux";

export interface withAuthRedirectType {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateRedux) => ({
    isAuth: state.Auth.isAuth
} as withAuthRedirectType)

export function withAuthRedirect <WCP>(WrappedComponent: React.ComponentType<WCP>){

    const RedirectComponent:React.FC<withAuthRedirectType & {} > = (props) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP} />
    }

    let ConnectedAuthRedirectComponent = connect<withAuthRedirectType, {}, WCP, RootStateRedux >
    (mapStateToPropsForRedirect, {})(RedirectComponent);

    return ConnectedAuthRedirectComponent
}
