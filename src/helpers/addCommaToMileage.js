export const addCommaToMileage = (mileage) => {
  if (mileage.length <= 1) {
    return mileage;
  }
  mileage = mileage.toString();

  const commaIdx = mileage.length <= 4 ? 1 : 2;

  return mileage.slice(0, commaIdx) + ',' + mileage.slice(commaIdx);
};
