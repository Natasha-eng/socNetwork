import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/profile.png'
import {UsersPropsType} from "./UsersContainer";

// type UsersPropsType = {
//     users: Array<UserType>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
// }

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }


        return   <div>

            <div>
                {pages.map(p => {
                 return <span className={this.props.currentPage === p ? styles.selectedPage: ""}
                              onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>

            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}