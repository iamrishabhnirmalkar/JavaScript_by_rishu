// Activity 1
const Number01 = 10;
const Number02 = 40;
const Number05 = "10";

console.log("Adding Task01", Number01 + Number02);
console.log("Subtract Task02", Number01 - Number02);
console.log("Multiply Task03", Number01 * Number02);
console.log("Divide Task04", Number01 / Number02);
console.log("Reminder Task05", Number01 % Number02);

// Activity 2
let Number03 = 10;
Number03 += 10;
console.log("Task06", Number03);

let Number04 = 10;
Number04 -= 10;
console.log("Task06", Number04);

// Activity 3
console.log(`${Number01} > ${Number02}:`, Number01 > Number02);
console.log(`${Number01} < ${Number02}:`, Number01 < Number02);
console.log(`${Number01} <= ${Number02}:`, Number01 <= Number02);
console.log(`${Number01} >= ${Number02}:`, Number01 >= Number02);
console.log(`${Number01} == ${Number05}:`, Number01 == Number05);
console.log(`${Number01} === ${Number05}:`, Number01 === Number05);

// Activity 4
let Number06 = true;
let Number07 = false;

// && is like saying: "Both hona chahiye" (AND)
// || is like saying: "Koi ek bhi chalega" (OR)
// This ! is like saying: "Opposite" (NOR)

console.log(`${Number06} && ${Number07}:`, Number06 && Number07);
console.log(`${Number06} || ${Number07}:`, Number06 || Number07);
console.log(`! ${Number06} :`, !Number06);

// BONUS:
// If we use Number or String instead of Boolean,
// JavaScript will use "truthy" or "falsy" logic behind the scenes.

// Activity 5

let Number08 = 20;
console.log(
  `Age ${Number08} is `,
  Number08 >= 18 ? "true value" : "false value"
);

// Feature Requests

// Task01
const Task01num = 20;
const Task02num = 10;

console.log(`${Task01num} + ${Task02num}:`, Task01num + Task02num);
console.log(`${Task01num} - ${Task02num}:`, Task01num - Task02num);
console.log(`${Task01num} / ${Task02num}:`, Task01num / Task02num);
console.log(`${Task01num} * ${Task02num}:`, Task01num * Task02num);
console.log(`${Task01num} % ${Task02num}:`, Task01num % Task02num);

// Task02
console.log(`${Task01num} > ${Task02num}:`, Task01num > Task02num);
console.log(`${Task01num} < ${Task02num}:`, Task01num < Task02num);
console.log(`${Task01num} <= ${Task02num}:`, Task01num <= Task02num);
console.log(`${Task01num} >= ${Task02num}:`, Task01num >= Task02num);
console.log(`${Task01num} == ${Task02num}:`, Task01num == Task02num);
console.log(`${Task01num} === ${Task02num}:`, Task01num === Task02num);

// Task03
let Task03 = 20;
console.log(`Age ${Task03} is `, Task03 >= 18 ? "Verified" : "UnVerified");
