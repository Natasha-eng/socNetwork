import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {UserProfileResponseType} from "../../redux/profile-reducer";
import profileStyles from "./Profile.module.css";

type ProfileType = {
    profile: UserProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
}


function Profile(props: ProfileType) {
    return (
        <div className={profileStyles.profileContainer}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;