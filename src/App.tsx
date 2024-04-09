import {useEffect, useRef, useState} from 'react';
import styles from './App.module.css';
import { Wall } from "./components/Wall/Wall";
import { TopInput }  from "./components/TopInput/TopInput";
import { useFetchData } from './helpers/useFetchData';
import {debounce} from "./helpers/debounce";

export function App() {
    const { posts, error, isLoading, fetchData } = useFetchData();
    const [inputValue, setInputValue] = useState('');
    const debouncedFetchDataRef = useRef(debounce(fetchData, 300));

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    useEffect(() => {
        if (inputValue !== '') {
            debouncedFetchDataRef.current(inputValue);
        } else {
            fetchData('');
        }
    }, [inputValue]);

    return (
        <div className={styles.App}>
            <TopInput value={inputValue} onChange={handleInputChange} />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Wall posts={posts} />
                    {error && <div className="error">{error}</div>}
                </>
            )}
        </div>
    );
}
