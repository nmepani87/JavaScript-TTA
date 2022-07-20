var A = 5; // Assigning value to a variable outside a function
function Add_numbers_1() { //Defining a function
    document.write(5 + A + "<br>"); //Asking js to print result of math problem with variable value to be used
}
function Add_numbers_2() { //Defining a function
    document.write(A + 10); //Asking js to print result of math problem with variable value to be used
}
Add_numbers_1(); //Returning results of the function
Add_numbers_2(); //Returning results of the function

function Add_numbers_3() { //Defining a function
    var C = 5; // Assigning value to a variable for local use
    document.write("<br>" + (5 + C) + "<br>"); //Asking js to print result of math problem with variable value to be used
}
function Add_numbers_4() { //Defining a function
    var D = 5; // Assigning value to a variable for local use
    document.write("<br>" +(D + 10)); //Asking js to print result of math problem with variable value to be used
}
Add_numbers_3(); //Returning results of the function
Add_numbers_4(); //Returning results of the function

function Add_numbers_3() { //Defining a function 
    var C = 5; // Assigning value to a variable for local use
    console.log(5 + C); //Asking js to show in console log result of math problem with variable value to be used
}
function Add_numbers4() { //Defining a function
    console.log(D + 10); //Asking js to show in console log result of math problem with variable value to be used
}
Add_numbers_3(); //Returning results of the function
Add_numbers_4(); //Returning results of the function

function get_Date(){ //Defining a function
    if (new Date().getHours()< 12) { //Getting JS to get the local time and then compare it to a value.
        document.getElementById("Mealtime").innerHTML = "It's still breakfast time!" //If time comparision was true then asking a string to be printed via HTML elementFromPoint with id
    }
}

function get_Date2(){ //Defining a function
    if (new Date().getHours()> 7) { //Getting JS to get the local time in milliseconds and then compare it to a value.
        document.getElementById("Waketime").innerHTML = "You should be awake!"; //If millisecond comparision was true then asking a string to be printed via HTML elementFromPoint with id for writing 
    }
}

function Alcohol_Function() { //Defining a function 
    Year = document.getElementById("Year").value; //Retriving value to be used via input box id in html 
    if (Year < 2003) { //If value and parameters set are true then this subfunction to be used
        Drink = "You are old enough to buy alcohol";
    }
    else {
        Drink = "You'll need to ask mummy/daddy to buy the alcohol for you kid"; //If value and parameters in function were not true then this subfunction to be used
    }
    document.getElementById("Able_to_buy").innerHTML = Drink; //Returns the string to be used and then linked via HTML elementFromPoint with id for writing 
}

function Meal_function(){ //Defining a function
    var Time = new Date().getHours(); //Getting JS to get the local time in hours and assign value to variable name
    if (Time < 10 == Time > 6) { // Asking to check if variable falls within either of the two value checks are true
        Reply = "It's time for breakfast"; //If check is true to use this string assigning to variable
    }
    else if (Time < 12 == Time >= 10) { //If previous check was not satisfied to check if this one works
        Reply = "It's time for brunch";
    }
    else if (Time < 15 == Time >= 12) { //If previous check was not satisfied to check if this one works
        Reply = "It's time for lunch";
    }
    else if (Time < 18 == Time >= 15) { //If previous check was not satisfied to check if this one works
        Reply = "It's time for tea";
    }
    else if (Time < 21 == Time >= 18) { //If previous check was not satisfied to check if this one works
        Reply = "It's time for dinner";
    }
    else {
        Reply = "It's not a good time to eat"; //If none of the checks were not satisfied then to return this string
    }
    document.getElementById("meal_time").innerHTML = Reply; //Using the returned string for writing via HTML elementFromPoint with id 
}