import React from "react";
import profileInfoStyles from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {UserProfileResponseType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: UserProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={profileInfoStyles.descriptionBlock}>
            <div className={profileInfoStyles.profileItemLeft}>
                <div className={`${profileInfoStyles.profileInfoItems} ${profileInfoStyles.profileImg}`}>
                    <img src={props.profile.photos.large}/>
                </div>

                <div className={` ${profileInfoStyles.profileInfoItems} ${profileInfoStyles.fullName}`}>{props.profile.fullName}</div>
                <div className={profileInfoStyles.statusMark}>Write your status:</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div className={profileInfoStyles.profileItemRight}>
                <div className= {profileInfoStyles.jobDescription}>
                    <div className={profileInfoStyles.profileInfoItem}>Looking for a job:</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>

                <div className= {profileInfoStyles.aboutMeInfo}>
                    <div className={profileInfoStyles.profileInfoItem}>About me:</div>
                    <div>{props.profile.aboutMe}</div>
                </div>

                <div className={profileInfoStyles.contacts}>
                    <div className={profileInfoStyles.profileInfoItem}>My contacts:</div>
                    {/*<div>{props.profile.contacts}</div>*/}
                </div>
            </div>


        </div>
    )
}
