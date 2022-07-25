function musicFunction(){
    var GenreOutput;
    var Genres = document.getElementById("MusicChoice").value;
    var String1 = " is a great type of music to listen to"; //Naming a variable and giving it a string for its end value
    var String2 = " is an interesting choice" //Naming a variable and giving it a string for its end value
    switch(Genres) {
        case "DnB":
            GenreOutput = "DnB" + String1;
            break;
            case "Electronica":
                GenreOutput = "Electronica" + String2;
            break;
            case "Garage":
                GenreOutput = "Garage" + String1;
            break;
            case "House":
                GenreOutput = "House" + String1;
            break;
            case "Trance":
                GenreOutput = "Trance" + String1;
            break;
            case "Techno":
                GenreOutput = "Techno" + String2;
            break;
            default:
            GenreOutput = "Please enter a genre from the list only";
    }
    document.getElementById("GenreResult").innerHTML = GenreOutput;
}

function changeFunction(){
    var A = document.getElementsByClassName("Change");
    A[1].innerHTML = "You see, it's changed!";
}

var c = document.getElementById("JSCanvas");
var ctx1 = c.getContext("2d");
ctx1.beginPath();
ctx1.moveTo(55, 120);
ctx1.quadraticCurveTo(30, 280, 506, 50);
ctx1.stroke();
var ctx2 = c.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(55, 120);
ctx2.quadraticCurveTo(-20, 430, 513, 45);
ctx2.stroke();

var ctx3 = c.getContext("2d");
var grad = ctx3.createLinearGradient(0, 0, 0, 250);
grad.addColorStop(0, "rgba(255, 255, 255, 0.3");
grad.addColorStop(1, "rgba(38, 166, 91, 0.5");
ctx3.fillStyle = grad;
ctx3.fillRect(0, 0, 600, 300);