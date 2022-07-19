function Ride_Function(){ //Defining a function
    var Height, Can_ride; // Creating two names for variables
    Height = document.getElementById("Height").value; //Having variable be the value this user inputs in html and is retrieved via HTML elementFromPoint
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //First asking to check if age is less that a value, if true print left sided string, if not print the other
    document.getElementById("Ride").innerHTML = Can_ride + " to ride"; //Putting output of the function thats going to be made into HTML elementFromPoint with an id. 
}

function Vote_Function(){ //Defining a function
    var Age, Can_vote; // Creating two names for variables
    Age = document.getElementById("Age").value; //Having variable be the value this user inputs in html and is retrieved via HTML elementFromPoint
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!"; //First asking to check if age is less that a value, if true print left sided string, if not print the other
    document.getElementById("Vote").innerHTML = Can_vote; //Putting output of the function thats going to be made into HTML elementFromPoint with an id. 
}

function Vehicle(Make, Model, Year, Color) { //Defining a function, starting object conconstructor for it too. Then giving it properties
    this.Vehicle_Make = Make; // Using 'this' to giving the object the abilities to possess the function
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Creating new instance of object and giving it a variable and strings for its properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // Creating new instance of object and giving it a variable and strings for its properties
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // Creating new instance of object and giving it a variable and strings for its properties
function myFunction(){
    document.getElementById("Keyword_and_Constructors").innerHTML = //Putting output of the function thats going to be made into HTML elementFromPoint with an id. 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //Asking for the results written to be some parts of premade sentence and other parts to be looked up to the specific object and its character value. 
    " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Color, Behaviour, Crossbred) { //Defining a function, starting object conconstructor for it too. Then giving it properties
    this.Dog_Breed = Breed; // Using 'this' to giving the object the abilities to possess the function
    this.Dog_Color = Color;
    this.Dog_Behaviour = Behaviour,
    this.Dog_Crossbred = Crossbred
}
var Max = new Dog("Alaskan Husky", "Black and White", "energetic and athletic", "is"); // Creating new instance of object and giving it a variable and strings for its properties
var Spark = new Dog("Pomeranian", "Brown ", "lively and playful", "is not"); // Creating new instance of object and giving it a variable and strings for its properties
var byte = new Dog("Greyhound", "Grey", "gentle and intelligent", "is not"); // Creating new instance of object and giving it a variable and strings for its properties
function dogFunction(){//Defining a function
    document.getElementById("New_and_This").innerHTML = //Putting output of the function thats going to be made into HTML elementFromPoint with an id. 
    "Spark is a " + Spark.Dog_Breed + " and is a " + Spark.Dog_Color + " colored dog. " //Asking for the results written to be some parts of premade sentence and other parts to be looked up to the specific object and its character value. 
    + Spark.Dog_Breed + " are " + Spark.Dog_Behaviour + " by nature and " + Spark.Dog_Crossbred
    + " a crossbred type dog.";
}

function true1(Owner, Maker, Model) {  // Defining a function with a reserved word key, then adding 1 to end of function as other functions will not be recognised otherwise
    this.true_Maker = Maker; // Using 'this' to giving the object the abilities to possess the function
    this.true_Model = Model;
    this.true_Owner = Owner
}
var John = new true("Mercedes-Benz", "SL55 AMG", "John"); // Defining variable and creating a new object of a function. This assigning data to various characters.
function carFunction(){ //Defining a function
    document.getElementById("Car1").innerHTML = //Putting output of the function thats going to be made into HTML elementFromPoint with an id. 
    John.true_Owner + " is the owner of a " + John.true_Maker + " " //Asking for the results written to be some parts of premade sentence and other parts to be looked up to the specific object and its character value. 
    + John.true_Model;
}

function count_Function(){ //Defining a function
    document.getElementById("Counting").innerHTML = Count(); //Putting output of the function thats going to be made into HTML elementFromPoint with an id 
    function Count() { //Defining a function
        var Start_num = 1; // Assigning a variable a value
        function Plus_one() {Start_num += 1;} //Defining a function and nesting a function to +1 to the value we gave to the variable
        Plus_one(); //Returning original function
        return Start_num; //Asking to stop the function running and return the new value from the oringal one given to the variable
    }

}