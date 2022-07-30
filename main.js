// Var
// Global Scope
function func1() {

  var x = 0;


  {
    var x = 100;
  }


  console.log(x);

}

// func1();



// Let
// Block Scoped
function func2() {

  let x = 0;

  {
    x = 100;
  }

  console.log(x);
}

// func2();

// Const
// Block Scoped
function func3() {

  const x = 0;

  {
    const x = 100;
    console.log(x);
  }

  // console.log(x);
}

// func3()


// Array --> Collection datatypes/entity/objects



// Other languages ---> Homogrnous
// JS Array --> Heterogenous it can contain all/many the types in single array

let arr = []; // what can a array contain in Javascript


// Contents --> 1, "Some Content", {}

// .push

// arr.push(1); 
// arr.push("Some Content");
// arr.push({});


arr[0] = 1;
arr[1] = "Some content";
arr[2] = {};

arr[100] = 'Sam';

// console.log(arr);
// console.log(arr[10]);
// console.log(arr.length);


// JS Objects ---> Keys <-> value pair
const sampleObj = { age: '40', role: "Engineer" };

// console.log(sampleObj);
// Accessing values of an object
// console.log(sampleObj['age']);
// console.log(sampleObj.age);


// Find, filter, findIndex

// Filter
const arr1 = [1, 2, 3, 4, 5];

// print the array of odd values from arr1
// 0 --> false & 1/ > 1  true

// console.log(arr1.filter((ele) => ele % 2));

// print the array of even numbers
// console.log(arr1.filter((ele) => !(ele % 2)));

const arrObjs = [{ name: 'Sanjay', mark: 500 }, { name: 'Sam', mark: 600 }, { name: 'Sam', mark: 550 }, { name: 'Saravanan', mark: 400 }];

// Print all the data whose mark is greater 450
// console.log( arrObjs.filter(ele => ele.mark > 450) );

// Print all the data whose mark is less than 450
// console.log( arrObjs.filter(ele => ele.mark < 450) );

// Print the data whose name sam
// console.log( arrObjs.filter(ele => ele.name === 'Sam') );

// Filter return type ---> array with matched items/empty array



// Find -> find to get a first element which matches the condition
// Print the single data whose name is sam from arrobj
// console.log(arrObjs.find(ele => ele.name === 'Sam'));

// return type find ---> first matching element/no matching --> undefined
// FindIndex

// Print the Index of the element whose name is Sanjay
// console.log(arrObjs.findIndex(ele => ele.name === 'Sanjay'));


// Array Iteration
const arr2 = [1, 3, 5, 7];

// Map
// Return type ---> new array formed
// Print an array which is the power 2 of all the elements of arr2
// Output: [1, 9, 25, 49]

// console.log(arr2.map((x, index, actualArray) => x ** 2));

// Foreach
// Return type ---> undefined
// Print the square of elements of array line by line;

// arr2.forEach(x => console.log(x ** 2)); 

// Reduce
const arr3 = [1,2,3,4,5];

// Sum Of array
// input  ---> [1, 2, 3];
// Output ---> 6

// let sum = 0;
// arr3.forEach(ele => sum += ele);
// console.log(sum);

// console.log(arr3.reduce((prevVal, currVal) => {
//   console.log("Reduce Iteration")
//   return prevVal + currVal;
// }, 10));


const subjects = [{ sub: 'Maths', mark: 80 }, { sub: 'eng', mark: 90 }, { sub: 'lang', mark: 81 }, { sub: 'science', mark: 97 }, { sub: 'social', mark: 95 }];

// Output: { totalMark: 443 }
let outputObj = subjects.reduce((prevObj, currObj) => {
  return { totalMark: prevObj.totalMark + currObj.mark };
}, { totalMark: 0 });

// console.log(outputObj);


// Sort

const arr4 = [5, 4, 2, 1, 3];

// Ascending Order
// Output: [1, 2, 3, 4, 5]
console.log(arr4.sort((x, y) => {
  if ( x > y ) {
    return 1;
  } else {
    return -1;
  }
}));

// Descending Order
// Output: [5, 4, 3, 2, 1]
// console.log(arr4.sort((x, y) => {
//   if ( x > y ) {
//     return -1;
//   } else {
//     return 1;
//   }
// }));

// Sort the Subject with ascending order of marks
// console.log(subjects.sort((x, y) => {
//   if ( x.mark > y.mark ) {
//     return 1;
//   } else {
//     return -1;
//   }
// }));

// Sort the Subject with descending order of marks
// console.log(subjects.sort((x, y) => {
//   if ( x.mark > y.mark ) {
//     return -1;
//   } else {
//     return 1;
//   }
// }));

// Sort the Subject with ascending order of subjects
// console.log(subjects.sort((x, y) => {
//   if ( x.sub.toLowerCase() > y.sub.toLowerCase() ) {
//     return 1;
//   } else {
//     return -1;
//   }
// }));


// Objects

const someObj = {
  name: "Sanjay",
  role: "Engineer",
  age: '40',
  dob: 'dd-mm-yyyy',
};


// Iteration
// Keys
// Object.keys(someObj).map(key => console.log(someObj[key]));


// values
// Object.values(someObj).map(value => console.log(value));

// for in
// for (const key in someObj) {
//   if (Object.hasOwnProperty.call(someObj, key)) {
//     const element = someObj[key];
//     console.log(element);
//   }
// }


// Template Literals
const age = 40;
const role = 'Dev';
// console.log("Age " + age + " Role "  + role);

// console.log(`Age ${age} Role ${role}`);


// Functions & Types of functions

// Keyword
function Display() {
  console.log("Some info");
}
// Anonymous to a variable
const display2 = function (x, y) {
  console.log("Some info", x, y);
}

// IIFE ---> immediately invoked function expression
// (function () {
//   console.log("Some info");
// })();

// Arrow function ---> ES6
const display3 = (x, y) => {
  console.log("Some info", x, y);
}


// Default Parameters

const Sum = (a, b=10) => {
  return  a + b;
}


// console.log(Sum(10, 5)); // Output: 15

// console.log(Sum(10)); // Output: 20

// Enhanced Object Literals
const personObj = {
  age,
  role,
};

// console.log(personObj);

// Object Destructing
const someObj2 = {
  id: 1,
  stuName: "Some-Name",
  dob: 'dd-mm-yyyy',
  class: "XII",
  section: 'B',
  skill: {
    name: "Football",
    position: "Goal keeper",
  }
};


// const { id: stuId, stuName, skill: { name: skillName } } = someObj2;
// console.log(stuId);
// console.log(stuName);
// console.log(skillName);

// Rest Operator
const { id: stuId, ...restAllStuProps } = someObj2;

// console.log(restAllStuProps);


// Array 

const arr5 = [1, 2, 3, 4];
// Rest
const [a, ...restAllVals] = arr5;

// console.log(a);
// console.log(restAllVals);

// Spread Operator
const arr6 = [10, 30, ...arr5];

// console.log(arr6);

// const someObj2 = {
//   id: 1,
//   stuName: "Some-Name",
//   dob: 'dd-mm-yyyy',
//   class: "XII",
//   section: 'B',
//   skill: {
//     name: "Football",
//     position: "Goal keeper",
//   }
// };
const someObj3 = { ...someObj2, percentage: 90 };
// console.log(someObj3);


// Object Oriented Programming --> Programming with help of imaginary ( behaviour, attributes/props ) created with blueprint in software language


// Ways to create user-defined in JS

// function

function Car(color, type) {

  this.color = color;
  this.type = type;

  // return {
  //   color,
  //   type,
  // }
}


// Basic function Invoking
console.log(Car('green', 'sedan'));


// Object Instantiation/ Construction with new keyword
const Audi = new Car('Black', 'Sedan');

console.log(Audi);

// const CarBluePrint = (color, type) => {
//   this.type = type;
//   this.color = color;
// }

// const BMW = new CarBluePrint('Black', 'Sedan');

// console.log(BMW);


class Vehicle {

  constructor (color, typeOfVehicle) {
    this.color = color; 
    this.typeOfVehicle = typeOfVehicle;
  }

}


class CarBluePrint extends Vehicle {

  constructor (color, typeOfVehicle, type) {
    super(color, typeOfVehicle);
    this.type = type;
  }

}

const BMW = new CarBluePrint('Black', "CAR", 'Sedan');

console.log(BMW);

class Bike extends Vehicle {
  constructor (color, typeOfVehicle, type) {
    super(color, typeOfVehicle);
    this.type = type;
  }
}


const R15 = new Bike("Blue", 'Bike', 'R15');

console.log(R15);


































