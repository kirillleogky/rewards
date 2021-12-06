export const formatMoney = (number: number): string => {
    return `${number}$`;
};

export const deformatMoney = (moneyAmount: string): string => {
    return moneyAmount.replace(/[^0-9]+/, '');
};
