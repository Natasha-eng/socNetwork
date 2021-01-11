import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {UserProfileResponseType} from "../components/Profile/ProfileContainer";

export type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
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

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '87b50b1b-6ff4-45ca-968d-60932a0881df'
    }
})

type AuthResponseType = {
    resultCode: number
    messages: String[],
    data: {
        id: number,
        email: string,
        login: string
    }
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId: number) {
        return instance.post<PostFollowResponseType>(`follow/${userId}`, {},)
    },

    unfollow(userId: number) {
        return instance.delete<DeleteFollowResponseType>(`follow/${userId}`)
    },

    getProfile(userId: number) {
        return instance.get<UserProfileResponseType>(`profile/` + userId);
    }

}

export const authAPI = {

    me() {
        return instance.get<AuthResponseType>(`auth/me`)
    }
}


