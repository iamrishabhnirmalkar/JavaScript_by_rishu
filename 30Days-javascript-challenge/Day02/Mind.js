// Truthy (treated as true)
const Truthy01 = true;
const Truthy02 = 1;
const Truthy03 = -100;
const Truthy04 = "Hello";
const Truthy05 = "0";
const Truthy06 = " "; // space string
const Truthy07 = [];
const Truthy08 = {};
const Truthy09 = function () {};
const Truthy10 = Infinity;

console.log(`Truthy01 ${Truthy01}:`, Boolean(Truthy01));
console.log(`Truthy02 ${Truthy02}:`, Boolean(Truthy02));
console.log(`Truthy03 ${Truthy03}:`, Boolean(Truthy03));
console.log(`Truthy04 "${Truthy04}":`, Boolean(Truthy04));
console.log(`Truthy05 "${Truthy05}":`, Boolean(Truthy05));
console.log(`Truthy06 "${Truthy06}":`, Boolean(Truthy06));
console.log(`Truthy07 []:`, Boolean(Truthy07));
console.log(`Truthy08 {}:`, Boolean(Truthy08));
console.log(`Truthy09 function:`, Boolean(Truthy09));
console.log(`Truthy10 ${Truthy10}:`, Boolean(Truthy10));

// Falsy (treated as false)
const Value01 = false;
const Value02 = 0;
const Value03 = ""; // empty string
const Value04 = null;
const Value05 = undefined;
const Value06 = NaN;

console.log(`Value01 ${Value01}:`, Boolean(Value01));
console.log(`Value02 ${Value02}:`, Boolean(Value02));
console.log(`Value03 ${Value03}:`, Boolean(Value03));
console.log(`Value04 ${Value04}:`, Boolean(Value04));
console.log(`Value05 ${Value05}:`, Boolean(Value05));
console.log(`Value06 ${Value06}:`, Boolean(Value06));
