import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {UserProfileResponseType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

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
        <div>
            {/* <div>
                <img alt="#" src="https://images.app.goo.gl/6yFxj7XkVWRLSSwz7"/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
