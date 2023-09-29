// Question 1
let num = 2;
for(let i=1; i<= 5; i++){ 
    console.log(i*num);
}

// Question 2
for(let i = 0; i<=4; i++){
    console.log(5-i);
}

// Question 3
const numbers = [1, 2, 3, 4, 5];
let total = 0;
for(const nums of numbers){
    total += nums;
}
console.log(total);

// Question 4
const student = {name: 'John', age: 20, grade: 'A'};
for(const key in student){
    console.log(`${key}`)
}

// Question 5
const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
for(const key in book){
    console.log(`${book[key]}`)
}

// Question 6
const colors = ['red', 'green', 'blue', 'yellow'];
for(const color of colors){
    console.log(color);
}
// Question 7
const numbers2 = [1, 2, 3, 4, 5];
let total2 = 0;
for(const nums of numbers){
    total += nums;
}
console.log(total);
// Question 8
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(temp){
    console.log((temp-32)*(5/9))
});
// Question 9
const cities = ['New York', 'LA', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'LA':3990456, 'Chicago':2705994, 'Houston':2320268};
cities.forEach(function(city){
    console.log(populations[city])
})
//Question 10
let text = "";
for(let i = 0; i<=4; i++){
    text += "*";
    console.log(text);
}
