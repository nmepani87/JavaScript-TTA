function countdown(){ //Defining function
    var seconds = document.getElementById("seconds").value; //Getting seconds inputted by user in input box via HTML elementFromPoint

    function tick() { //Defining function
        seconds = seconds - 1; //Getting 1 to be subtracted from value assigned to variable
        timer.innerHTML = seconds; //Deleting second show in html with same id and replace with new second value
        var time = setTimeout(tick, 1000); //Setting function to be excuted and delay time
        if (seconds == -1) { //If time gets to -1 to do other actions
            alert("Time's up!"); //When time gets to -1 show window alert with a string
            clearTimeout(time); //Also to clear time countdown at -1
            timer.innerHTML = ""; //To enter a blank number once value reaches -1
        }
    }
    tick(); //returns the result of the tick funtion
}

let slideIndex = 1; //Setting slide to first picture
showSlides(slideIndex); //Getting js to display first image

// Next/Previous controls
function plusSlides(n) { //Defining function and passing arguement to function
    showSlides(slideIndex += n); //Getting js to display image through addition assignment operator
}

//Thumbnail image controls
function currentSlide(n) { //Defining function and passing arguement to function
    showSlides(slideIndex = n); //Getting js to display image according to slideIndex number
}

function showSlides(n) { //Defining function and passing arguement to function
    let i;
    let slides = document.getElementsByClassName("mySlides"); //Selecting all the elements in HTML via elementFromPoint
    let dots = document.getElementsByClassName("dot"); //Selecting all the elements in HTML via elementFromPoint
    if (n > slides.length) {slideIndex = 1} //Declaring slideIndex to avoid creating global variable
    if (n < 1) {slideIndex = slides.length} //Saying if n is less than 1 to set index value to total number of slides
    for (i = 0; i < slides.length; i++) { //Getting JS to loop over the slides 
        slides[i].style.display = "none"; //Setting display to none, so hiding slides
   }
    for (i = 0; i < dots.length; i++) { //Getting JS to loop over the dots
        dots[i].className = dots[i].className.replace(" active", ""); //Replacing each dot with the class "active"
    }
    slides[slideIndex-1].style.display = "block"; //Getting current slide to show as 'block'
    dots[slideIndex-1].className += " active"; // Getting the dot on the slide shown to be 'active' class
}