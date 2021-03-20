import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {UserProfileResponseType} from "../redux/profile-reducer";


export type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export type CommonDeletePostFollowResponseType = {
    resultCode: number
    messages: String[]
    data: {}
}

type PostFollowResponseType = {
    resultCode: number
    messages: String[]
    data: {}
}

type UpdateStatusResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '211feec0-1855-4be6-873e-e36e9bb0fc77'
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

type LoginResponseType = {
    resultCode: number
    messages: String[],
    data: {
        userId: number
    }
}

type LogoutResponseType = {
    resultCode: number
    messages: String[],
    data: {}
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId: number) {
        return instance.post<CommonDeletePostFollowResponseType>(`follow/${userId}`, {},)
    },

    unfollow(userId: number) {
        return instance.delete<CommonDeletePostFollowResponseType>(`follow/${userId}`)
    },

    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileApy object')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<UserProfileResponseType>(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status`, {status});
    }

}

export const authAPI = {

    me() {
        return instance.get<AuthResponseType>(`auth/me`)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`);
    }
}


