import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";

export type UserProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type mapStatePropsType = {
    profile: UserProfileResponseType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: UserProfileResponseType) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get<UserProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => ({
    profile: state.ProfilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>
(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

