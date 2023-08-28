// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
export function informationbyID(inventory) {
  for (let index = 0; index < inventory.length; index++) {
    if (inventory[index].id === 33) {
      let carInfoObj = inventory[index];
      return `Car 33 is a ${carInfoObj.car_year} ${carInfoObj.car_make} ${carInfoObj.car_model}`;
    }
  }
}
