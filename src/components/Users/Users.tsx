import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/profile.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

type DeleteFollowResponseType = {
    resultCode: number
    messages: String[]
    data: {}
}

type PostFollowResponseType = {
    resultCode: number
    messages: String[]
    data: {}
}



export function Users(props: UsersType) {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            axios.delete<DeleteFollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '87b50b1b-6ff4-45ca-968d-60932a0881df'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })



                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post<PostFollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '87b50b1b-6ff4-45ca-968d-60932a0881df'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                      <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
}