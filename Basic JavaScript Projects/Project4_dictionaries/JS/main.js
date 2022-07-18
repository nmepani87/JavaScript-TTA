function myDictionary (){ //Defining and naming a function
    var Serpentes = { //Creating a variable and naming it and then creating a dictionary for it
        Family:"Viperidae", //KVP 1
        Genus:"Bothriechis", //KVP 2
        Species: "Eyelash Viper", //KVP 3
        Conservation_status: "Least Concern", //KVP 4
        Venom_type: "mainly hemotoxic", //KVP 5
    }; //Closing of dictionary so no more KVP can be added
    delete Serpentes.Venom_type; // Deleting KVP 5
    document.getElementById("Dictionary").innerHTML = Serpentes.Species + " venom type is " + Serpentes.Venom_type; //Putting output of KVP 3 and KVP 5 (for testing as its been deleted) into HTML elementFromPoint with id of "Dictionary"
}