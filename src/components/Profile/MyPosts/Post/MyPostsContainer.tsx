import React, {Dispatch} from "react";
import MyPosts from "../MyPosts";
import {addPostAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostType} from "../../../../redux/store";
import {RootStateRedux} from "../../../../redux/redux-store";

type mapStatePropsType = {
    posts: Array<PostType>
}

type mapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => {
    return {
        posts: state.ProfilePage.posts,

    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>): mapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;