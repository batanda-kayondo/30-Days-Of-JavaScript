// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')
// let num = 7-9
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// } else if (num == 0){
//     console.log(`${num} is neither a positive nor a negative number`)
// } else {
//     console.log(`${num} is a negative number`)
// }

// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch(day) {
//     case 'monday': console.log('Today is Monday')
//     break
//     case 'tuesday': console.log('Today is Tuesday')
//     break
//     case 'wednesday': console.log('Today is Weddnesday')
//     break
//     case 'thursday': console.log('Today is Thursday')
//     break
//     case 'friday': console.log('Today is Friday')
//     break
//     case 'saturday': console.log('Today is Saturday')
//     break
//     case 'sunday': console.log('Today is Sunday')
//     break
// }

// Exercises
// Level 1

// Qn #1: Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating 
// to wait for the number of years he neds to turn 18.

// let userAgeInput = prompt('Enter your age:')
// let ageDifference = 18 - userAgeInput
// ageDifference <= 0 
// ? console.log('You are old enough to drive')
// : console.log(`You are left with ${ageDifference} years to drive`)

// ============================= //

// Qn #2: Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 27
// let userAgeInput = prompt('Enter your age:')
// let ageDifference = userAgeInput - myAge
// if(ageDifference > 0){
//     console.log(`You are ${ageDifference} years older than me.`)
//  } else if (ageDifference == 0){
//     console.log('We are the same age')
//  } else {
//      let value = Math.abs(ageDifference)
//      console.log(`You are ${value} years younger than me`)
//  }

//  =============================== //

//  Qn #3: If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways

let a = 4
let b = 3

// using if..else
// if (a>b){
//     console.log(`${a} is greater than ${b}`)
// } else {
//     console.log(`${b} is greater than ${a}`)
// }

// using ternary operator
let differenceAB = a - b
differenceAB ? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)

// =============================== //

// Qn 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, 
// if a number is even or not using JavaScript?

let numberInput = prompt('Enter a number:')
if (numberInput % 2 == 0){
    console.log(`${numberInput} is an even number`)
} else {
    console.log(`${numberInput} is an odd number`)
}