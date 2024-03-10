export const reversePrice = (str) => {
  const newString = str.replace(/([^0-9]*)([0-9]+)(\$)?(.*)/, '$2$1$3$4');

  return newString;
};
