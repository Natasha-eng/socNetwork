import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";



type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes ) => void
}

function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}  newPostText = {props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;