// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

import { caryear } from "./problem4.js";

export function filterCarYear(inventory) {
  let carYearArr = caryear(inventory);
  let filterCarYear = [];
  for (let index = 0; index < inventory.length; index++) {
    if (carYearArr[index] < 2000) {
      filterCarYear.push(carYearArr[index]);
    }
  }
  console.log(filterCarYear.length);
  return filterCarYear;
}
