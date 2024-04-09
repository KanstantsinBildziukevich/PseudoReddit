export const debounce = <T> (func: (...arg: T[]) => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...arg: T[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...arg);
        }, delay);
    };
}