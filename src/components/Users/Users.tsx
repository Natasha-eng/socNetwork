import React from "react";
import usersStyles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
}


export function Users({totalUsersCount, pageSize, currentPage,
                          onPageChanged, users,  ...props }: UsersType){

    /*

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
*/

    return (
        <div className={usersStyles.usersContainer}>

            {/* <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? usersStyles.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>*/}

            <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize}/>

            <div className={usersStyles.container}>
                {users.map(u => <User user = {u}  unfollow = {props.unfollow} follow={props.follow} followingInProgress={props.followingInProgress} key={u.id} />)}
            </div>

        </div>)
}