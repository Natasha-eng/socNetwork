import React from "react";
import classes from './Post.module.css';


type PostsType = {
    message: string
    likesCount: number
}

function Post(props: PostsType) {
    return (
        <div className={classes.item}>
            <img src='https://images.app.goo.gl/5ZCf4bKyMsx3XMHf7'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;