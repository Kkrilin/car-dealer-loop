// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

export function caryear(inventory) {
  let carYearArr = [];

  for (let index = 0; index < inventory.length; index++) {
    carYearArr[index] = inventory[index].car_year;
  }
  return carYearArr;
}
