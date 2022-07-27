function getReceipt() {
    // Initialises string so can be passed function to function, grows line by line into full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    //naming array for sizes, getting values via ElementsbyClassName method
    var sizeArray = document.getElementsByClassName("size");
     //Starting loop, give i start value, increasing by +1 as going through each topping in array
    for (var i = 0; i < sizeArray.length; i++) {
        //exit for loop if box checked 
        if (sizeArray[i].checked) {
            //defining variable so values can be adding by if statements
            var selectedSize = sizeArray[i].value;
            //Getting the selectedsize to be adding to the variable when called for displaying into html
            text1 = text1+selectedSize+"<br>";
        }
    }
    //Values to be added to sizeTotal if HTML value selected
    if (selectedSize === "Small Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 9;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 15;
    } else if (selectedSize === "XXL Pizza") {
        sizeTotal = 18;
    }
    //Giving first cost to runningTotal
    runningTotal = sizeTotal;
    //Print string it console log
    console.log(selectedSize+" = £" +sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: £"+runningTotal+".00");
    //Variables to be passed next each function
    getSauce(runningTotal,text1);
    };

function getSauce(runningTotal,text1){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
     //Starting loop, give K start value, increasing by +1 as going through each sauce in array
    for (var k = 0; k < sauceArray.length; k++) {
         //exit for loop if box checked and what sub function to execute
        if (sauceArray[k].checked) {
            var selectedSauce = sauceArray[k].value;
            //Getting the selectedsauce to be adding to the variable when called for displaying into html
            text1 = text1+selectedSauce+"<br>";
        }
    }
    //Values to be added to sauceTotal if HTML value selected
    if (selectedSauce === "Red Pizza Sauce") {
        sauceTotal = 0;
    } else if (selectedSauce === "Marinara") {
        sauceTotal = 2;
    } else if (selectedSauce === "Neopolitan") {
        sauceTotal = 3;
    } else if (selectedSauce === "Pesto") {
        sauceTotal = 3;
    } else if (selectedSauce === "White Sauce") {
        sauceTotal = 2;
    }
    //Adding total derived from selection on runningTotal
    runningTotal = runningTotal + sauceTotal;
    //Statements for console log to show 
    console.log(selectedSauce+" = £" +sauceTotal+".00");
    console.log("sauce text1: "+text1);
    console.log("subtotal: £"+runningTotal+".00");
    //Variables to be passed onto each function
    getTopping(runningTotal,text1);
    };

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    //Creating blank array to be filled by selection from HTML
    var selectedTopping = [];
    //Getting the list of available values 
    var toppingArray = document.getElementsByClassName("toppings");
    //Starting loop, give J start value, increasing by +1 as going through each topping in array
    for (var j = 0; j < toppingArray.length; j++) {
        // if box checked in html, what sub function to execute
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            //prints chosen topping in console log
            console.log("selected topping item: ("+toppingArray[j].value+")");
            //adds topping array list to text1 variable
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    //Putting length found into variable new name to be able to costed
    var toppingCount = selectedTopping.length;
    //Giving person 1 free topping by deducted 1 topping from count if > 1 chosen, sets cost/topping too
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //Getting final total by adding toppings on
    runningTotal = (runningTotal + toppingTotal);
    //Getting console to print various sentences
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"£"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"£"+runningTotal+".00");
    //Returning text1 end string for displaying on HTML by ElementbyId 
    document.getElementById("showText").innerHTML=text1
    //Returning totalPrice end value for displaying on HTML by ElementbyId 
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>£"+runningTotal+".00"+"</strong></h3>";
};