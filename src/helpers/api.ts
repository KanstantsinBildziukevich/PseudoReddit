import {WallDataDTO} from "./api.types";

export const fetchSomeData = async (inputValue: string, signal: AbortSignal) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${inputValue.trim() === "" ? "wallpapers" : inputValue}.json`, {signal});
        const data = await response.json() as WallDataDTO;
        if (data && data.data && data.data.children) {
            return data.data.children;
        } else {
            throw new Error('No data received from the Reddit API');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the Reddit API');
    }
};