// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("checks to see if the value of organization is 'nonprofit'", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("checks to see if the value of executiveDirector is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("checks to see if the value of executiveDirector is 'Jeff'", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("checks to see if the value of programsOffered is correct", function(){
    let programsArray = launchcode.programsOffered;
    expect(programsArray[0]).toBe("Web Development");
    expect(programsArray[1]).toBe("Data Analysis");
    expect(programsArray[2]).toBe("Liftoff");
    expect(programsArray.length).toBe(3);
  });

  //function tests------------------------------------------
  test("checks to see if launchOutput() returns 'Launch!' when passed a number that is ONLY divisible by 2", function(){
    let result = var % 2 === 0;
    if (result % 2 === 0)
    expect(result).toBe("Launch!");
  });

  test("checks to see if launchOutput() returns 'Code!' when passed a number that is ONLY divisible by 3", function(){
    let result =
    expect(result).toBe("Code!");
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });

  test("checks to see if launchOutput() meets the conditions", function(){
    expect().toBe();
  });
  
});


// Here is what they need the launchcode object to contain:

//     A key called organization with a value of "nonprofit".
//     A key called executiveDirector with a value of "Jeff".
//     A key called percentageCoolEmployees with a value of 100.
//     A key called programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"].
//     And a method called launchOutput(). This method will return a string.