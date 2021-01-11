import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";


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
    isAuth: boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
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
        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth ) return <Redirect to = '/login'/>;

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => ({
    profile: state.ProfilePage.profile,
    isAuth: state.Auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

