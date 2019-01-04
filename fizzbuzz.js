module.exports = () => {
  const isFizz = (candidate) => candidate % 3 === 0;
  const isBuzz = (candidate) => candidate % 5 === 0;
  const isFizzbuzz = (candidate) => isFizz(candidate) && isBuzz(candidate);
  const create = (length) => [...new Array(length).keys()].map(i => i + 1);
  const toFizzbuzz = (candidate) => {
    if (isFizzbuzz(candidate)) return 'fizzbuzz';
    if (isFizz(candidate)) return 'fizz';
    if (isBuzz(candidate)) return 'buzz';
    return candidate;
  }
  return create(100).map(toFizzbuzz);
};
