import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://s7.cdn.teleprogramma.pro/wp-content/uploads/2020/01/webp_l/e187d44f997b399185adaf352cc17b83.webp'/>
            {props.message}
            <div>
                {props.likesCount}<span> like</span>
            </div>
        </div>
    );
}

export default Post;