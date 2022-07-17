function Button1() { //Defining and naming 1st function
    var str1 = "Check your", str2 = " watch!", str3 = str1 + str2; //Asssigned 2 strings to 2 variables, third is the 2 joined
    document.getElementById("Button_Text").innerHTML = str3; //Putting output of str3 into HTML elementFromPoint with id of "Button_Text"
}

function secondFunction(){ //Defining and naming 2nd function
    var str4 = "And you fell"; str4 += " for it again!"; //Assigning 2 strings same variable name, but concatenating them with =+ rather than 3rd string joining them
    document.getElementById("Concatenate").innerHTML = str4; //Putting output of Str4 into HTML elementFromPoint with id of "Concatenate"
}