export const formatMoney = number => {
    return `${number}$`;
};

export const deformatMoney = moneyAmount => {
    return moneyAmount.replace(/[^0-9]+/, '');
};
