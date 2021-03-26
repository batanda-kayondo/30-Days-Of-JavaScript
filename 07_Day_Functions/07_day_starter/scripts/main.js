// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// function printFullName (){
//     let firstName = 'Batanda'
//     let lastName = 'Kayondo'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(printFullName())

// function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
//   }

//   console.log(areaOfCircle(70))

//   const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
//   }
//   console.log(areaOfCircle(70))

// Unlimited number of parameters in regular function

// function sumAllNums() {
//     console.log(arguments)
//    }
   
//    sumAllNums(1, 2, 3, 4)

// Using function declaration
// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//     }
//     return sum
//   }

// Using arrow functions
// const sumAllNums = (...args) => {
//     let sum = 0
//     for (const element of args) {
//       sum += element
//     }
//     return sum
//   }

// console.log(sumAllNums(19,18,17,16,15,14))

// let sqr =(function(n) {
//     return n*n
// })(10)
// console.log(sqr)

// let sqr = n => n*n
// console.log(sqr)

// Exercise

// 1. Declare a function fullName and it print out your full name.

// function fullName (){
//         let firstName = 'Batanda'
//         let lastName = 'Kayondo'
//         let space = ' '
//         let fullName = firstName + space + lastName
//         return fullName
//     }
//     console.log(fullName())

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.

// const sumOfNums = (a,b) => a+b
// console.log(sumOfNums(4,5))

// 3. An area of a rectangle is calculated as follows: area = length x width. Write a function
// which calculates areaOfRectangle.

// const areaOfRectangle = (len, width) => len * width
// a = prompt('Enter length')
// b = prompt('Enter width')
// console.log('The area of the rectangle is:', areaOfRectangle(a,b))

// 4. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
// Write a function which calculates perimeterOfRectangle

// const perimeterOfRectangle = (len,width) => 2 * (len * width)
// a = prompt('Enter length')
// b = prompt('Enter width')
// console.log('The perimeter of the rectangle is:', perimeterOfRectangle(a,b))

// 5. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
// Write a function which convert oC to oF convertCelciusToFahrenheit.

// const convertCelciusToFahrenheit = (tempInCelcius) => ((tempInCelcius * 9)/5) + 32
// let temperature = prompt('Enter temperature in Celcius')
// console.log('Temperature in Fahreinheit: ',convertCelciusToFahrenheit(temperature),'°F')

// 6. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi.
// let bmi = (weight, height) => weight / (height * height)
// let weight = prompt('Enter your weight in Kg')
// let height = prompt('Enter your height in m')

// let bmiCalc = bmi(weight,height).toFixed(2)

// switch(true) {
//     case bmiCalc < 18.5:
//         console.log(bmiCalc, 'You are underweight')
//         break
//     case bmiCalc >= 18.5 && bmiCalc < 25:
//         console.log(bmiCalc, 'You gat normal weight')
//         break
//     case bmiCalc >= 25 && bmiCalc < 30:
//         console.log(bmiCalc, 'You are overweight')
//         break
//     case bmiCalc >=30:
//         console.log(bmiCalc, 'You are obese')
//         break
//     default:
//         console.log('You need to check your bmi') 

// }

// 7. Math.max returns its largest argument. Write a function findMax that takes three 
// arguments and returns their maximum with out using Math.max method.

let maxParam
const findMax = (param1, param2, param3) => {
    if (param1 > param2 && param1 > param3) {
        maxParam = param1
        // console.log('The maximum argument is ', param1)
    } else if (param2 > param1 && param2 > param3){
        maxParam = param2
        // console.log('The maximum argument is ', param2)
    } else {
        maxParam = param3
        // console.log('The maximum argument is ', param3)
    }
    return maxParam
}

let param1 = prompt('Enter first parameter')
let param2 = prompt('Enter second parameter')
let param3 = prompt('Enter third parameter')
console.log(findMax(param1, param2, param3))
