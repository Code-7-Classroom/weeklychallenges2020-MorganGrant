//Hard
// Tom has a height of 9in and a mass 8lbs and Jerry has a height of 10cm and a mass of 45g. Compare the BMI’s of
// Tom & Jerry using the formula: BMI = mass / height ^2 = mass / (height * height).
// Given the information for Tom and Jerry. Store Tom & Jerry’s mass and height as variables. Calculate both
// their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
 



function calcBMI ( mass,height ) {
    return mass / (height * height)
}
var tomMass = 81;
var tomHeight = 9;

var jerryMass = 45;
var jerryHeight = 10;

var tombmi = calcBMI ( tomMass , tomHeight);
var jerrybmi = calcBMI ( jerryMass , jerryHeight);



console.log( jerrybmi , tombmi )


if ( jerrybmi > tombmi){
    var greaterBmi = jerrybmi > tombmi;
    console.log ("Is Tom’s BMI higher than Jerry’s? " + greaterBmi );

}
if ( tombmi > jerrybmi  ) { 
    var greaterBmi = jerrybmi > tombmi;
    console.log ("Is Tom’s BMI higher than Jerry’s? " + greaterBmi );
}




