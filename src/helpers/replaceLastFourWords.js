export const replaceLastFourWords = (sentence) => {
  const words = sentence.split(' ');
  if (words.length >= 2) {
    words.splice(1, 5, '');
  }
  return words.join(' ');
};
