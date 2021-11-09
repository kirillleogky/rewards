export const moveInputCursor = event => {
  const currentValue = event.target;
  const len = currentValue.value.length - 1;                                     // Move to second to last position

  if (currentValue.setSelectionRange) {
      currentValue.focus();
      currentValue.setSelectionRange(len, len);
  } else if (currentValue.createTextRange) {
      const t = currentValue.createTextRange();
      t.collapse(true);
      t.moveEnd('character', len);
      t.moveStart('character', len);
      t.select();
  }
};
