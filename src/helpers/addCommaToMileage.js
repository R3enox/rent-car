export const addCommaToMileage = (mileage) => {
  if (mileage.length <= 1) {
    return mileage;
  }
  mileage = mileage.toString();

  const length = mileage.length;
  let commaIdx;

  if (length <= 4) {
    commaIdx = 1;
  } else if (length === 5) {
    commaIdx = 2;
  } else if (length === 6) {
    commaIdx = 3;
  } else {
    return mileage;
  }

  return mileage.substring(0, commaIdx) + ',' + mileage.substring(commaIdx);
};
