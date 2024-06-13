// Declare and assign the variables below
let nameOfTheSpaceShuttle = 'Determination';

let shuttleSpeedMph = 17500;

let distanceToMarsKm = 225000000;

let distanceToTheMoonKm = 384400;

let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheSpaceShuttle);

console.log(typeof shuttleSpeedMph);

console.log(typeof distanceToMarsKm);

console.log(typeof distanceToTheMoonKm);

console.log(typeof milesPerKilometer);


// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKilometer;

let hoursToMars = milesToMars / shuttleSpeedMph;

let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(nameOfTheSpaceShuttle +" will take "+daysToMars +" days to reach Mars.")

// Calculate a trip to the moon below

let milesToTheMoon = distanceToTheMoonKm * milesPerKilometer;

let hoursToTheMoon = milesToTheMoon / shuttleSpeedMph;

let daysToTheMoon = hoursToTheMoon / 24;

// Print the results of the trip to the moon below

console.log(nameOfTheSpaceShuttle +" will take "+daysToTheMoon +" days to reach the Moon.")