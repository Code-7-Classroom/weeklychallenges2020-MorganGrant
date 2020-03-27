//Hard
// Tom has a height of 9in and a mass 8lbs and Jerry has a height of 10cm and a mass of 45g. Compare the BMI’s of
// Tom & Jerry using the formula: BMI = mass / height ^2 = mass / (height * height).
// Given the information for Tom and Jerry. Store Tom & Jerry’s mass and height as variables. Calculate both
// their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
 
//Store Tom & Jerry’s mass and height as variables
var tomMass = 8; //lb
var tomHeight = 9; //in

var jerryMass = 45/454; //convert g to lb
var jerryHeight = 10/2.45; // convert cm to in

//Calculate both their BMI’s.
function calcBMI ( mass,height ) {
    return mass / (height * height)
};

//Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
var isTomBMIGreater = calcBMI ( tomMass , tomHeight) > calcBMI ( jerryMass , jerryHeight); 

// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
console.log( `Is Tom's BMI higher than Jerry's? ${isTomBMIGreater}`);









