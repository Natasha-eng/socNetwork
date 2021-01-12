import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
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
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}



let mapStateToProps = (state: RootStateRedux):mapStatePropsType  => {
    return {
        dialogsPage: state.DialogsPage,
        isAuth: state.Auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs)



/*const DialogsContainer = withAuthRedirect(connect<mapStatePropsType,mapDispatchPropsType,{}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Dialogs));*/

export default compose<React.ComponentType>(
    connect<mapStatePropsType,mapDispatchPropsType,{}, RootStateRedux>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);