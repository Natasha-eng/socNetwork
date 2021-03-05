import {RootStateRedux} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateRedux) => {
    return state.UsersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: RootStateRedux) => {
    return state.UsersPage.pageSize;
}

export const getTotalUsersCount = (state: RootStateRedux) => {
    return state.UsersPage.totalUsersCount;
}

export const getCurrentPage = (state: RootStateRedux) => {
    return state.UsersPage.currentPage;
}

export const getIsFetching = (state: RootStateRedux) => {
    return state.UsersPage.isFetching;
}

export const getFollowingInProgress = (state: RootStateRedux) => {
    return state.UsersPage.followingInProgress;
}

