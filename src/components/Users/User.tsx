import React from "react";
import usersStyles from "./users.module.css";
import userPhoto from "../../assets/images/unknown.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UserType
    followingInProgress: number[]
}


export function User({
                         user, followingInProgress,
                         follow,
                         unfollow
                     }: UsersPropsType) {

    return (
        <div className={usersStyles.card}>
            <div className={usersStyles.imgBox}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         className={usersStyles.userPhoto}/>
                </NavLink>
            </div>
            <div className={usersStyles.details}>

                <h2>{user.name}</h2>
                <span>{user.status}</span>
                <span>{'user.location.country'}</span>
                <span>{'user.location.country'}</span>

                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</button>}
            </div>
        </div>)
}