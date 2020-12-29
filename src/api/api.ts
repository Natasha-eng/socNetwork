import axios from "axios";
import {UserType} from "../redux/users-reducer";

export type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '87b50b1b-6ff4-45ca-968d-60932a0881df'
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


