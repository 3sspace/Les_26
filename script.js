const car = {
    type: "electric",
    wheels: 4
}
const sportCar = {
    doors: 2
}
Object.setPrototypeOf(sportCar,car);
const passengerCar = {
    doors:4
}
Object.setPrototypeOf(passengerCar,sportCar);

const toyCar = {
    type: "toy"
}
Object.setPrototypeOf(toyCar,sportCar);



const employees = {
    wallet: {},
    pay(month, sum) {
      this.wallet[month] = sum;
    },
  };
const frontendDeveloper = {
    name: "Mike",
    wallet: {},
    pay(month, sum) {
      this.wallet[month] = sum;
    },
  };
  Object.setPrototypeOf(frontendDeveloper, employees);
const backendDeveloper = {
    name: "Bob",
    wallet: {},
    pay(month, sum) {
      this.wallet[month] = sum;
    },
  };
  Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay("august", 1500);
frontendDeveloper.pay("august", 1600);
console.log(backendDeveloper.wallet.august);
console.log(frontendDeveloper.wallet.august);


function User(name1,age) {
    this.name1 = name1;
    this.age = age;
}
const user_1 = new User('Mike',18);
const user_2 = Object.create(user_1);
user_2.name1 = 'Bobby';
user_2.age = 25;
console.log(user_1);
console.log(user_2);

function UserType(name) {
    for (let i = 0; i < name.length; i++) {
      this[i] = name[i];
      if (i + 1 === name.length) {
        Object.defineProperty(this, 'length', {
          enumerable: true,
          writable: false,
          configurable: true,
          value: i + 1,
        });
      }
    }
    this.join = Array.prototype.join;
  }
  
  const admins = new UserType(['Mike', 'Bob', 'Nikola']);
  