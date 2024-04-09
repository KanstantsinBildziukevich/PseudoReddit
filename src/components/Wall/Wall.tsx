import React from 'react';
import { Post } from '../Post/Post';
import { WallProps } from './Wall.types';
import styles from './Wall.module.css';
import { Link } from "react-router-dom";

export const Wall: React.FC<WallProps> = ({ posts }) => {

    return (
        <div className={styles.wall}>
            {posts.map((post) => (
                <Link key={post.data.id} to={`/new/${post.data.id}`} className={styles.link}>
                    <Post post={post.data} />
                </Link>
            ))}
        </div>
    );
};
