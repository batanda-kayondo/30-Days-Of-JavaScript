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

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch(day) {
    case 'monday': console.log('Today is Monday')
    break
    case 'tuesday': console.log('Today is Tuesday')
    break
    case 'wednesday': console.log('Today is Weddnesday')
    break
    case 'thursday': console.log('Today is Thursday')
    break
    case 'friday': console.log('Today is Friday')
    break
    case 'saturday': console.log('Today is Saturday')
    break
    case 'sunday': console.log('Today is Sunday')
    break
}