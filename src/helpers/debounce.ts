export const debounce = (fetchData: (arg: string) => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (arg: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fetchData(arg);
        }, delay);
    };
}