import React from "react";
import styles from './Post.module.css';
import { ChildData } from "./Post.types";

export const Post: React.FC<{ post: ChildData }> = ({ post }) => {
    return (
        <div className={styles.post}>
            {post && (
                <>
                    <p>{post.author}</p>
                    <h3>{post.title}</h3>
                    {post.url && (
                        <img src={post.url} alt={post.selftext} />
                    )}
                    <div className={styles.likesContainer}>
                        <span role="img" aria-label="heart" className={styles.heart}>❤️</span>
                        <span className={styles.likesContainer}>{post.score}</span>
                    </div>
                </>
            )}
        </div>
    );
};
