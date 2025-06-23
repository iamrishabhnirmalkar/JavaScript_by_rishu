// Activity 1
let Task01 = -650;

if (Task01 > 0) {
  console.log("Task01 is Positive");
} else if (Task01 < 0) {
  console.log("Task01 is Negative");
} else {
  console.log("Task01 is Zero");
}

let Age = 20;
if (Age >= 18) {
  console.log("Person is Eligibale For Vote");
} else {
  console.log("Person is Not Eligibale For Vote");
}

// Activity 2

let Task03A = 120;
let Task03B = 40;
let Task03C = 15;

if (Task03A > Task03B) {
  if (Task03A > Task03C) {
    console.log(`${Task03A}`, "is Grater Number ");
  } else {
    console.log(`${Task03C}`, "is Grater Number ");
  }
} else {
  if (Task03B < Task03C) {
    console.log(`${Task03C}`, "is Grater Number ");
  } else {
    console.log(`${Task03B}`, "is Grater Number ");
  }
}

// Activity 3
const Day = 6;
switch (Day) {
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tueday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
  case 4:
    console.log("It's Thusday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
    break;
  case 7:
    console.log("It's Sunday");
    break;
  default:
    console.log("Not a Correct Number");
}

let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Score: ${score} => Grade: ${grade}`);

// Activity 4

const Task06 = 5;

logic = Task06 % 2 === 0;

console.log(logic ? "This Is Even Number" : "This Is odd Number");

// Activity 5

let Year = 2025;
const logicLeap = (Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0;

console.log(`Is ${Year} divisible by 4?`, logicLeap);
