function fullSentence(){ //Defining function
    var part1 = "This sentence "; //Assigning string to a variable
    var part2 = "has been "; //Assigning string to a variable
    var part3 = "made into 1 line "; //Assigning string to a variable
    var part4 = "when it was "; //Assigning string to a variable
    var part5 = "originally multiple strings." //Assigning string to a variable
    var wholeSentence = part1.concat(part2, part3, part4, part5); //Getting JS to concatenate all the variables into one
    document.getElementById("Concatenate").innerHTML = wholeSentence; //Getting the variable's result to be used and then linked via HTML elementFromPoint with id for writing
}

function sliceMethod(){
    var complete = "This is a complete sentence which will be used";
    var partSentence = complete.slice(10,18);
    document.getElementById("Slice").innerHTML = partSentence;
}

function uppercaseMethod(){
    var smallwords = "This sentence was originally written in all lowercase."
    var bigwords = smallwords.toUpperCase();
    document.getElementById("Caps").innerHTML = bigwords;
}

function searchMethod(){
    var searchline = "We will search this sentence for first place first appears."
    var endposition = searchline.search("first");
    document.getElementById("SearchedWord").innerHTML = endposition + " character";
}