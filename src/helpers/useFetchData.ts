import { useState } from 'react';
import { fetchSomeData } from './api';
import { Child } from "./api.types";

let abortController = new AbortController();
export const useFetchData = () => {
    const [posts, setPosts] = useState<Child[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (inputValue: string) => {
        setIsLoading(true);
        try {
            abortController.abort();
            abortController = new AbortController();
            const data = await fetchSomeData(inputValue, abortController.signal);
            setPosts(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch data from the Reddit API');
        } finally {
        setIsLoading(false);
        }
    };

    return { posts, error, isLoading, fetchData };
};
