import React from "react";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {Dispatch } from 'redux'
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";

type mapStatePropsType = {
    users: Array<UserType>
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => {
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }

    }
}


export default connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Users)