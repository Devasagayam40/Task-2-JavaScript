
// 1–3 primitive datatype
let employeeName = "Charles";
let employeeAge = 22;
let isWorking = true;

console.log(typeof employeeName); // string
console.log(typeof employeeAge); // number
console.log(typeof isWorking);   // boolean

// 4
let myVariable;
console.log(myVariable); // undefined

// 5–6
let str = "Hello";
let num = 100;
let bool = true;
let und;
let nul = null;

console.log(typeof str);  // string
console.log(typeof num);  // number
console.log(typeof bool); // boolean
console.log(typeof und);  // undefined
console.log(typeof nul);  // object

// 7–8
let courseName = "JavaScript";
let batchNo = 42;
console.log(courseName);
console.log(typeof batchNo);



// 9–12 arrays
let fruits = ["apple", "mango", "orange", "banana", "grapes"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Orange
console.log(fruits[fruits.length - 1]); // Grapes

// 13–14
let details = ["Charles", 22, "Chennai", "Developer"];
console.log(details[0]);
console.log(details[1]);
console.log(details[2]);
console.log(details[3]);

// 15–16
let mixed = ["JavaScript", 100, true];
console.log(mixed);
console.log(mixed.length); // 3

// 17–18
let mobiles = ["Apple", "Samsung", "Vivo", "Oppo", "OnePlus"];
console.log(mobiles[1]); // Samsung

let languages = ["Java", "Python", "C", "C++", "PHP", "JavaScript"];
console.log(languages[languages.length - 1]); // JavaScript




// 19–21 objects
let student = {
    name: "Charles",
    age: 22,
    city: "Chennai"
};

console.log(student.name);
console.log(student.age);

// 22
let employee = {
    name: "Arun",
    salary: 30000,
    designation: "Developer"
};

// 23
let developer = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Java"]
};
console.log(developer.skills[2]); // JavaScript

// 24–25
let toyDetails = {
    fruit: "Apple",
    number: 10,
    boolean: true,
    toy: "Car"
};
console.log(toyDetails.toy);

// 26
let company = {
    companyName: "TCS",
    location: "Chennai",
    employeeCount: 5000
};
console.log(company);




// 27–32 operators
console.log(10 + 20);    // 30
console.log(50 - 20);    // 30
console.log(2 * 3 * 4);  // 24
console.log(100 / 5);    // 20
console.log(25 % 4);     // 1
console.log(3 ** 4);     // 81

// 33:operations
let a = 20;
let b = 5;

console.log(a + b);  // 25
console.log(a - b);  // 15
console.log(a * b);  // 100
console.log(a / b);  // 4
console.log(a % b);  // 0
console.log(a ** b); // 3200000


// 34. Pre-increment
let n1 = 10;
console.log(++n1); // 11

// 35. Post-increment
let n2 = 20;
console.log(n2++); // 20
console.log(n2);   // 21

// 36. Pre-decrement
let n3 = 30;
console.log(--n3); // 29

// 37. Post-decrement
let n4 = 40;
console.log(n4--); // 40
console.log(n4);   // 39

// 38. Post-increment prediction
let p = 10;
let q = p++;
console.log(p); // 11
console.log(q); // 10

// 39. Pre-increment prediction
let x = 15;
let y = ++x;
console.log(x); // 16
console.log(y); // 16

// 40. Final values
let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;

console.log(num1); // 24
console.log(num2); // 25
console.log(num3); // 25
console.log(num4); // 25
