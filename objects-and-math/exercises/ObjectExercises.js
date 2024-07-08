let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   
};

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

let crewReports = function () {return this.name + " is a " + this.species +". They are " + this.age + " years old and "+ this.mass + " kilograms. Their ID is " + this.astronautID + ".";}

let fitnessTest = function([arr]) {
   
   for (let i = 0; i < crew.length; i++) {
      let totalSteps = 0;
      let turns = 0;
      while(totalSteps <= 20){
         totalSteps = totalSteps + arr[i].move;
         turns++;
      }
   } 
}

for (let i = 0; i < crew.length; i++){
   crew[i].astronautID = Math.floor(Math.random()*10) + 1;
   crew[i].move = Math.floor(Math.random()*11);
   crew[i].report = crewReports;
};


for (let i = 0; i < crew.length; i++){
   console.log(crew[i].report());
};


//console.log(crewReports(beagle));
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.


// Print out the relevant information about each animal.

// Start an animal race!
