export const getFromLocalStorage = (key: string): any => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return null;
};

export const setLocalStorage = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
};
