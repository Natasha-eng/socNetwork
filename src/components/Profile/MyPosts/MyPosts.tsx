import React, {RefObject} from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";



        type PostsType = {
            posts: Array<PostType>
            newPostText: string
            dispatch: (action: ActionsTypes) => void
        }

        function MyPosts(props: PostsType) {

            let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

            let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

            let addPost = () => {
                props.dispatch(addPostActionCreator());
            }

            let onPostChange = () => {
                if (newPostElement.current) {
                    let text = newPostElement.current.value;
                    let action = updateNewPostTextActionCreator(text);
                    props.dispatch(action)
                }
            }

            return (
                <div className={classes.postsBlock}>
                    <h3> My posts</h3>
                    <div>
                        <div>
                            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={addPost}>Add post</button>
                        </div>
                    </div>
                    <div className={classes.posts}>
                        {postsElement}
                    </div>
                </div>
            )
        }

        export default MyPosts;