// 1. Define the Vehicle Class
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }
  // 2. Add Methods
  drive(distance) {
    this.mileage = this.mileage + distance;
  }
  getDetails() {
    return `${this.year} ${this.make} ${this.model} (${this.type}) - Milaege: ${this.mileage} miles`;
  }
}
// 3. Create and Use Vehicle Objects 
let car = new Vehicle("Car", "Subaru", "Crosstreck", 2024);     //instantiate three vehicle objects
let truck = new Vehicle("Truck", "GMC", "Canyon", 2026);
let motorcycle = new Vehicle("Motorcycle", "Ducati Monster", "696 ABS", 2023);

car.drive(150);      //use the drive method to simulate trips
truck.drive(300);
motorcycle.drive(75);

console.log(car.getDetails());     //use the getDetails method to print each vehicle's information
console.log(truck.getDetails());
console.log(motorcycle.getDetails());