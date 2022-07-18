function additionFunction() { //Defining and naming a function
    var add1 = 1.25 + 1.5; //Assigning a variable an addition problem
   document.getElementById("Math1").innerHTML = "1.25 + 1.5 = " + add1; //Putting output of add1 plus the problem into HTML elementFromPoint with id of "Math1"
}

function subtractFunction() { //Defining and naming a function
    var minus1 = 1.25 - 1.5; //Assigning a variable subtraction problem
   document.getElementById("Math2").innerHTML = "1.25 - 1.5 = " + minus1; //Putting output of minus1 plus the problem into HTML elementFromPoint with id of "Math2"
}

function multiplyFunction() { //Defining and naming a function
    var times1 = 1.25 * 1.5; //Assigning a variable a multiplication problem
    document.getElementById("Math3").innerHTML = "1.25 * 1.5 = " + times1; //Putting output of times1 plus the problem into HTML elementFromPoint with id of "Math3"
}

function divideFunction() { //Defining and naming a function
    var divide1 = 1.25 / 1.5; //Assigning a variable a division problem
    document.getElementById("Math4").innerHTML = "1.25 / 1.5 = " + divide1; //Putting output of divide1 plus the problem into HTML elementFromPoint with id of "Math4"
}

function allmathFunction() { //Defining and naming a function
    var allmath1 = 10 / 2 * 5 + 3 - 28; //Assigning a variable with multiple types of maths in one problem
    document.getElementById("Math5").innerHTML = "10 divided by 2, multiplied by 5, 3 then added on and finally 28 subtracted = " + allmath1; //Putting output of allmath1 plus the problem into HTML elementFromPoint with id of "Math5"
}

function modulusOperator() { //Defining and naming a function
    var allmath2 = 29 % 5; //Assigning a variable a division but with the remainder operator
    document.getElementById("Math6").innerHTML = "Dividing 29 by 5 leave you with a remainder of: " + allmath2; //Putting output of allmath2 plus few words into HTML elementFromPoint with id of "Math6"
}

function negationOperator() { //Defining and naming a function
    var x = 2; //Assigning a variable a number
    document.getElementById("Math7").innerHTML = -x; //Getting JS to negate the variable and put results into HTML elementFromPoint with id of "Math7"
}

var y = 1.25, z = 1.25; //Giving values to two variables
y++, z--; //Asking for variable y to in increased by 1 and z variable to be decreased by 1
document.write(y,"<br>", z); //Asking for the results for the new values of y and z to be written

window.alert(Math.random() * 10); //Creating a window alert to return a random number between 0-10

function mathObject1() { //Defining and naming a function
    document.getElementById("Math8").innerHTML = Math.ceil(2.1); //Putting output of the Math.ceil results into HTML elementFromPoint with id of "Math8"
}

