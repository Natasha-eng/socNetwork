import React from "react";
import MyPosts from "../MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";
import { Store } from "redux";


type PostsType = {
    // store: StoreReduxType
}

function MyPostsContainer(props: PostsType) {

    return (
        <StoreContext.Consumer>
            {(store:Store) => {

                let state = store.getState();

                let addPost = () => {
                   store.dispatch(addPostAC());
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text);
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={store.getState().ProfilePage.posts}
                         newPostText={store.getState().ProfilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;