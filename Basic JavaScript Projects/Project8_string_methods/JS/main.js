function fullSentence(){ //Defining function
    var part1 = "This sentence "; //Assigning string to a variable
    var part2 = "has been "; //Assigning string to a variable
    var part3 = "made into 1 line "; //Assigning string to a variable
    var part4 = "when it was "; //Assigning string to a variable
    var part5 = "originally multiple strings." //Assigning string to a variable
    var wholeSentence = part1.concat(part2, part3, part4, part5); //Getting JS to concatenate all the variables into one
    document.getElementById("Concatenate").innerHTML = wholeSentence; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function sliceMethod(){ //Defining function
    var complete = "This is a complete sentence which will be used"; //Assigning string to a variable
    var partSentence = complete.slice(10,18); //Getting JS to slice the string within variable at certain positions then return that to new variable name
    document.getElementById("Slice").innerHTML = partSentence; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function uppercaseMethod(){ //Defining function
    var smallwords = "This sentence was originally written in all lowercase." //Assigning string to a variable
    var bigwords = smallwords.toUpperCase(); //Getting JS to convert the string within variable to all uppercase lettering then return that to new variable name
    document.getElementById("Caps").innerHTML = bigwords; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function searchMethod(){ //Defining function
    var searchline = "We will search this sentence for first place first appears." //Assigning string to a variable
    var endposition = searchline.search("first"); //Getting JS to search the string within variable for the position of a certain word then return that to new variable name
    document.getElementById("SearchedWord").innerHTML = endposition + " character"; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function tostringMethod(){ //Defining function
    var X = 101; //Assigning value to a variable
    document.getElementById("Num2String").innerHTML = X.toString(); //Getting the variable's value to be returned to a string and then linked via HTML elementFromPoint with id for writing
}

function precisionMethod(){ //Defining function
    var X = 3.1415926535;  //Assigning pi value (10 decimal places) to a variable
    document.getElementById("Precision").innerHTML = X.toPrecision(5); //Getting the variable's value to be shorten to 5 numbers long and then linked via HTML elementFromPoint with id for writing
}

function tofixMethod(){ //Defining function
    var X = 3.1415926535; //Assigning pi value (10 decimal places) to a variable
    var FixedNum = X.toFixed(0); //Asking of X varaible to be converted to 0 decimals and result assign to new variable name
    document.getElementById("Fixed").innerHTML = FixedNum; //Getting the variable's value to be linked via HTML elementFromPoint with id for writing
}

function valueofMethod(){ //Defining function
    var X = new String("This is the earliest string value"); //Giving a variable a value, but instead that value creates another value/string within
    var endString = X.valueOf() //Assigning earliest string within X variable to new variable
    document.getElementById("Value").innerHTML = endString; //Getting the variable's string to be linked via HTML elementFromPoint with id for writing
}