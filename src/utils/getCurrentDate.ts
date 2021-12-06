export const getCurrentDate = (): string => {
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate: Date = new Date();
    const month: string = months[currentDate.getMonth()];
    const day: number = currentDate.getDate();
    const year: number = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
};
