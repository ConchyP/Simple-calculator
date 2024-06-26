
function calculator(num1, num2, operator) {

    if  (Number.isNaN(num1) || Number.isNaN(num2)) return "unknown value";

    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        return "unknown value"; }

let total;
    
    if (operator === '+') total = num1 + num2
    if (operator === '-') total = num1 - num2
    if (operator === '*') total = num1 * num2
    if (operator === '/'&&num2!=0) total = num1 / num2
    return total
}

console.log(calculator(2, 2, "-")); //=> 4
console.log(calculator(2, 4, "*")); //=> 8
console.log(calculator(1, 2, "&")); //=> "unknown value"
console.log(calculator(1, 'k', 'x')); //=> "unknown value"