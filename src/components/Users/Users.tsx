import React from "react";
import usersStyles from "./users.module.css";
import userPhoto from "../../assets/images/unknown.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

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


export function Users(props: UsersType) {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

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

                <div className={usersStyles.container}>
                    {props.users.map(u => <div className={usersStyles.card} key={u.id}>
                        <div className={usersStyles.imgBox}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={usersStyles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={usersStyles.details}>

                                <h2>{u.name}</h2>
                                <span>{u.status}</span>
                                <span>{'u.location.country'}</span>
                                <span>{'u.location.country'}</span>

                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.unfollow(u.id);
                                            }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.follow(u.id);
                                              }}>Follow</button>}


                        </div>
                    </div>)}
                </div>

        </div>)
}