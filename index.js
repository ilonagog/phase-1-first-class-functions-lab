// Code your solution in this file!
let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};
const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (integer) {
  return (fare) => integer * fare;
};
const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2;
};
const fareTripler = createFareMultiplier(3);
