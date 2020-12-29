import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ProfilePropsType, UserProfileResponseType} from "./ProfileContainer";

type ProfileType = {
    profile: UserProfileResponseType | null

}


function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;