//================ for =============
// (initialization; condition; update) {
// code to run each loop
// } =================

// Activity 1

for (let i = 1; i <= 10; i++) {
  console.log("Number", i);
}

for (let j = 1; j <= 10; j++) {
  console.log(`5 X ${j} =`, j * 5);
}

// Activity 2
let Task03 = 1;
let sum = 0;

while (Task03 <= 10) {
  sum += Task03;
  Task03++;
}

console.log("Sum from 1 to 10 is:", sum);

// Activity 3
let Task05 = 1;
do {
  console.log("Task05", Task05);
  Task05++;
} while (Task05 <= 5);

// Activity 4
let Task06number = 5;
let Task06init = 1;
let Task06final = 1;

do {
  Task06final *= Task06init;
  Task06init++;
} while (Task06init <= Task06number);

console.log(Task06final);

// Activity 4
for (let Task07 = 1; Task07 <= 5; Task07++) {
  let row = "";
  for (let Task7 = 1; Task7 <= Task07; Task7++) {
    row += "* ";
  }
  console.log(row);
}

// Activity 5

for (let Task08 = 1; Task08 <= 10; Task08++) {
  if (Task08 === 5) {
    continue;
  }
  console.log("Task08", Task08);
}

for (let Task09 = 1; Task09 <= 10; Task09++) {
  if (Task09 === 7) {
    break;
  }
  console.log("Task09", Task09);
}
