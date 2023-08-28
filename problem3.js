// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

export function sortCarModel(inventory) {
  let carModelArr = [];
  for (let index = 0; index < inventory.length; index++) {
    carModelArr[index] = inventory[index].car_model;
  }
  //   return carModelArr.sort((a, b) =>
  //     a.localeCompare(b, "en", { sensitivity: "base" })
  //   );

  for (let i = 1; i < carModelArr.length; i++) {
    let value = carModelArr[i];
    let j;
    for (
      j = i - 1;
      j >= 0 &&
      carModelArr[j].localeCompare(value, "en", { sensitivity: "base" }) === 1;
      j--
    ) {
      carModelArr[j + 1] = carModelArr[j];
    }
    carModelArr[j + 1] = value;
  }
  return carModelArr;
}

// export function sortbyCarModel(inventory) {
//   return inventory.sort((a, b) =>
//     a.car_model.localeCompare(b.car_model, "en", { sensitivity: "base" })
//   );
// }
