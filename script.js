"use strict"

let hours = prompt("How Many hours did you work?");
let wage = prompt("What is your wage per hour?");
let sum = hours*wage;


if(hours > 40){
    sum = wage * 40;
    let otHours = hours - 40;
    let otWage = wage * 1.5;
    let otSum = otWage * otHours;
    sum += otSum;
    console.log(sum);
} else {
    console.log(sum);
}

let weeks = 1000000 / sum;
console.log(Math.ceil(weeks));


