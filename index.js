// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384000;
const milesPerKilometer = .621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKilometer);

// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Code your solution to exercise 5 here:
console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.');

let milesToMoon = distanceToTheMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + ' will take ' + daysToMoon + ' days to reach the Moon.');