export const getCurrentDate = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
};

export const getFromLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};
