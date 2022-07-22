function Call_Loop(){ //Defining function
    var Value = "";  //Creating a variable with the value to be calculated in loop 
    var X = 0; // //Naming variable and giving it a value
    while (X < 5) { //Telling JS whilst conditions met to carry on doing next statement
        Value += "<br>" + X; // Having this string(value) to the value to be used as results for Value variable
        X++; //Adding 1 to X
    }
    document.getElementById("Loop").innerHTML = Value; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id
}

text1 = document.getElementById("Str1").innerHTML; //Getting string from html to be used as the value and assigning it variable name
length = text1.length; //Using the length property to calculate the length of the variable's string and also assigning it new name
document.getElementById("LengthProp").innerHTML = length; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id

Countries = ["Bulgaria", "Estonia", "Lithuania", "Republic of Cyprus", "Slovakia", "Slovenia"]; //Assigning various countries to a variable as an array
Content = ""; //Getting the results of the function to be the results for this created variable
var Y; //Creating variable
function for_Loop(){ //Defining function
    for (Y = 0; Y < Countries.length; Y++) { //Getting Y starting value, then condition for executing code block, what to execute after code blocks been done
        Content += Countries[Y] + "<br>"; //Having this string(value) to the value to be used as results for content variable
    }
    document.getElementById("EUCountries").innerHTML = Content; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function car_pics(){ //Defining function
    var Car_Picture = []; //Naming variable and given it blank index value
    Car_Picture [0] = "racing"; //Giving index value a specific property
    Car_Picture [1] = "getting washed"; //Giving index value a specific property
    Car_Picture [2] = "getting repaired"; //Giving index value a specific property
    Car_Picture [3] = "on fire"; //Giving index value a specific property
    document.getElementById("Car").innerHTML = "In this picture, the car is " + Car_Picture[3] + "."; //Getting the variable's result to be used in the sentence and then linked via HTML elementFromPoint with id
}

function constant_function() { //Defining function
    const TV = {brand:"Sony", resolution:"4k", picture_type: "OLED"}; //Naming constant object and creating array with properties and values
    TV.screensize = "65"; //Adding property to object
    TV.brand = "LG"; //Changing the value of a property
    document.getElementById("Constant").innerHTML = "This TV is made by " + TV.brand + ". It is " + TV.screensize + " and has a " + TV.resolution + " resolution."; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function let_varFunction(){ //Defining function
    let X1 = 15; //Giving a global let a value
    document.getElementById("Num1").innerHTML = X1; //Getting the let's result to be used and then linked via HTML elementFromPoint with id
{
    let X1 = 20; //Giving same let a local value
    document.getElementById("Num2").innerHTML = X1; //Getting the let's result to be used and then linked via HTML elementFromPoint with id
}
document.getElementById("Num3").innerHTML = X1; //Getting the let's result to be used and then linked via HTML elementFromPoint with id
}

document.getElementById("return").innerHTML = returnFunction("there"); //Getting the function's result to be used, giving it an expression to be used in the function and then linking it via HTML elementFromPoint with id for writing
function returnFunction(greet) { //Defining function with expression given
    return "Hello " + greet; //Return string with expression added to it
}

let house = { //Defining an object as a let
    type: "detached ", //Defining property and it's value
    bedrooms: "4 ", //Defining property and it's value
    style: "Victorian ", //Defining property and it's value
    gardens: "front & back "}; //Defining property and it's value
    house.description = "This is a " + house.bedrooms + "bedroom " + house.style + house.type + "house and comes with a garden in the " + house.gardens; //Returning a string with some parts used via calling the objectName.propertyName value
document.getElementById("House_Object").innerHTML = house.description; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing

let text = ""; //Define a let and string to be written is from loop results
for (let i = 0; i < 5; i++) { //Giving starting point to i, telling it to stay less than a number and +1 to i.
    if (i === 4) { break; } //If condition met to break the loop
    text += "The number is " + i + "<br>"; //Add this string to the let 'text'
}
document.getElementById("Break1").innerHTML = text; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing

let cont = ""; //Define a let and string to be written is from loop results
for (let i = 0; i < 5; i++) { //Giving starting point to i, telling it to stay less than a number and +1 to i.
    if (i === 2) { continue; } //If condition met to continue with loop rather than break at that value
    cont += "The number is " + i + "<br>"; //Add this string to the let 'cont' 
}
document.getElementById("Break2").innerHTML = cont; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing

