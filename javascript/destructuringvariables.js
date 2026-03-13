let working = "Larry";
let onBreak = "Lisa";

console.log("working-", working);
console.log("onBreak-", onBreak);

working = onBreak;
onBreak = working;

console.log("--switch--");

console.log("working-", working);
console.log("onBreak-", onBreak);

[working, onBreak] = [onBreak, working];

//destructuring works to swap variables by just switching the order
s;
