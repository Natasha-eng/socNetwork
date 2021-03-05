import React from "react";
import postStyle from './Post.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons/faThumbsUp";


type PostsType = {
    message: string
    likesCount: number
}

function Post(props: PostsType) {
    return (
        <>
            <img src='https://images.app.goo.gl/5ZCf4bKyMsx3XMHf7' alt = 'userImg'/>
            <div className={postStyle.postMessage}>{props.message}</div>
            <div className={postStyle.likeItem}>
                <span><FontAwesomeIcon icon={faThumbsUp} className={postStyle.fa}/> {props.likesCount}</span>
            </div>

        </>
    )
}

export default Post;