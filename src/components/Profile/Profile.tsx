import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string)=> void
}

function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}  newPostText = {props.profilePage.newPostText} addPost={props.addPost} updateNewPostText = {props.updateNewPostText} />
        </div>
    )
}

export default Profile;