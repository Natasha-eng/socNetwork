import React from "react";
import MyPosts from "../MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostType} from "../../../../redux/store";
import {RootStateRedux} from "../../../../redux/redux-store";

type mapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: RootStateRedux): mapStatePropsType => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchPropsType => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;