// Question 1
function multiply(x, y){
    return x*y;
}
console.log(multiply(3, 5));
console.log(multiply(7, 4));
// Question 2
function isEven(x){
    val = x%2;
    if(val == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(6));
console.log(isEven(83791));

// function hello(name = "BOb"){
//     console.log(`Hello ${name}`)
// }
// hello()
// hello('Evan')

// Question 3
const difference = function(a, b){
    return b-a;
}
console.log(difference(3, 7))
console.log(difference(32, 94))

// Question 4
const greeting = function(name){
    return `Hello ${name}`;
}
console.log(greeting('Jeffery'));
console.log(greeting("Jim"));

// Question 5
function calculate(x, y){
    result = (x+y)**2;
    return result;
}
console.log(calculate(3, 5));
console.log(calculate(2, 4));

// Question 6
function average(num1, num2, num3){
    sum = num1 + num2 + num3;
    av = sum/3
    return av;
}
console.log(average(3, 6, 9));
console.log(average(1, 2, 3));

// Question 7
const multiply2 = (a,b) => a*b
console.log(multiply2(2, 1));
console.log(multiply2(3, 12));

// Question 8
const greet = (name) => `Hello ${name}`;
console.log(greet("Jimothy"));
console.log(greet("King Julien"));

// Question 9
const square = (x) => x*x;
console.log(square(3));
console.log(square(25));

// Question 10
const isEven2 = (num) => num%2 == 0;
console.log(isEven2(28198374));
console.log(isEven2(12893721));

// Question 11
const findMax = (numbers) => Math.max(...numbers);
console.log(findMax([1, 2, 3, 6]));

// Question 12
const addTwoNumbers = (a, b) => a+b;
console.log(addTwoNumbers(21, 82));
console.log(addTwoNumbers(2, 8));
