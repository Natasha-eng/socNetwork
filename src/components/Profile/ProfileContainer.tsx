import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {getUserStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
    status: string
}

type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
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
            userId =  13115 ;
            // this.props.history.push("/login");
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status
})

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>
// (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
/*withRouter(connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile})(AuthRedirectComponent));*/

export default compose<React.ComponentType>(
    connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)

