import { Link, useParams } from "react-router-dom";
import styles from './NewPage.module.css'
import { Post } from "../../Post/Post";
import React, { useEffect, useState } from "react";
import {ChildData, PostDataDTO} from "../../Post/Post.types";
import { useFetchData } from "../../../helpers/useFetchData";
export const NewPage: React.FC = () => {
    const { isLoading } = useFetchData();
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<ChildData | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
                const postDataResponse = await response.json() as Array<PostDataDTO>;
                if (postDataResponse && postDataResponse[0].data && postDataResponse[0].data.children) {
                    setPost(postDataResponse[0].data.children[0].data)
                } else {
                    throw new Error('No data received from the Reddit API');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                throw new Error('Failed to fetch data from the Reddit API');
            }
        };

        fetchPost();
    }, [postId]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.wall}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                post && <Post post={post} />)}
                <Link to="/" className={styles.link}><p>Homecoming</p></Link>
            </div>
        </div>
    );
}