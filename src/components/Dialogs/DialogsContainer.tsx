import React from "react";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";

type mapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: RootStateRedux):mapStatePropsType  => {
    return {
        dialogsPage: state.DialogsPage,
        isAuth: state.Auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs)

/*const DialogsContainer = withAuthRedirect(connect<mapStatePropsType,mapDispatchPropsType,{}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Dialogs));*/

export default compose<React.ComponentType>(
    connect<mapStatePropsType,mapDispatchPropsType,{}, RootStateRedux>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);