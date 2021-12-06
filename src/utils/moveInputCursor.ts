export const moveInputCursor = (event: Event): void => {
    const currentValue = event.target as HTMLInputElement;
    const len = currentValue.value.length - 1;                                     // Move to second to last position

    if (currentValue.setSelectionRange) {
        currentValue.focus();
        currentValue.setSelectionRange(len, len);
    }
};
