export const replaceLastWord = (sentence) => {
  const words = sentence.split(' ');
  if (words.length >= 3) {
    words.splice(2, 4);
  }
  return words.join(' ');
};
