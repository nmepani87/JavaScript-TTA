document.write("typeof test <br>" + typeof false); //Asking js to print what type of data has been written
document.write("<br><br>Coercion Test<br> 10" + 10); //Getting js to join a number to the end of the string even though the string is a number itself

document.write("<br>");
function my_Function1(){ //Defining a function
    document.getElementById("Test1").innerHTML = 0/0; //Putting output of a non divisable number into another non divisable number (for testing as its been deleted) into HTML elementFromPoint with id of "Test1"
}

function my_Function2(){ //Defining a function
    document.getElementById("Test2").innerHTML = isNaN('Hello'); //Putting output of a check if bracketed data is a number into HTML elementFromPoint with id of "Test2"
}

function my_Function3(){ //Defining a function
    document.getElementById("Test3").innerHTML = isNaN('0'); //Putting output of a check if bracketed data is a number into HTML elementFromPoint with id of "Test3"
}

document.write("<br>Infinity test<br>" + 2E310);
document.write("<br>" + -3E310 + "<br>");
document.write("<br>");

document.write(1 < 2);
document.write("<br>");
document.write(1 > 2);
document.write("<br>");
document.write(1 + 2 == 3);
document.write("<br>");
document.write(1 + 2 == 4);
document.write("<br>");

console.log(3+2); //Asking JS to return results from data(math problem) in bracket to console instead of writing into html page
console.log(1>2); //Asking JS to return results from data(Boolean test) in bracket to console instead of writing into html page
document.write("<br>");
document.write("<br>");

A = 2; //Assigning variable a number
B = 2; //Assigning variable a number
C = 3; //Assigning variable a number
D = "two"; //Assigning variable string
E = "2" //Assigning variable number but within a string
document.write (A === B); //A check if variable A is exactly equal to B and write true/false result
document.write("<br>");
document.write(C === D); // check if variable C is exactly equal to D and write true/false result
document.write("<br>");
document.write(A === E); //A check if variable A is exactly equal to E and write true/false result
document.write("<br>");
document.write(A === C); // A check if variable A is exactly equal to C and write true/false result
document.write("<br>");
document.write("<br>");

document.write(1<2 && 3>2); //Asking JS to check if boolean test both sides of the And operator (&&) are true/false and to write result
document.write("<br>");
document.write(1<2 && 3<2); //Asking JS to check if boolean test both sides of the And operator (&&) are true/false and to write result
document.write("<br>");
document.write(1<2 || 3<2); //Asking JS to check if boolean test both sides of the And operator (||) are true/false and to write result
document.write("<br>");
document.write(1>2 || 3<2); //Asking JS to check if boolean test both sides of the And operator (||) are true/false and to write result
document.write("<br>");

function not_Function1(){ //Defining a function
    document.getElementById("Not1").innerHTML = !(1>2); //Putting output of a Not check if bracketed data is true/false into HTML elementFromPoint with id of "Not1"
}
function not_Function2(){ //Defining a function
    document.getElementById("Not2").innerHTML = !(1<2); //Putting output of a Not check if bracketed data is true/false into HTML elementFromPoint with id of "Not2"
}