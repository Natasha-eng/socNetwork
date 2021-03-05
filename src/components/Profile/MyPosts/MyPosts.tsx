import React from "react";
import Post from "./Post/Post";
import myPostsStyles from "./MyPosts.module.css";
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import postStyles from "./Post/Post.module.css";


type PostsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

type addPostPropsType = {
    newPostText: string
}

const maxLength50 = maxLengthCreator(50);

function MyPosts(props: PostsType) {

    let postsElement = props.posts.map(p => <div className={postStyles.post}><Post key={p.id} message={p.message}
                                                                                likesCount={p.likesCount}/></div>);


    let onAddPost = (values: addPostPropsType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={myPostsStyles.postsBlock}>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={myPostsStyles.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export type AddPostFormValuesType = {
    newPostText: string
}

type PropsType = {}

function AddNewPostForm(props: InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType) {
    return (
        <form onSubmit={props.handleSubmit} className={myPostsStyles.form}>
            <div className={myPostsStyles.formField}>
                <Field component={Textarea} placeholder={"Write your thoughts..."} name="newPostText"
                       validate={[required, maxLength50]}/>
            </div>
            <button className={myPostsStyles.buttonForm}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;