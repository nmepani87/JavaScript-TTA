function displayType(phoneManu) {
  var phone = phoneManu.getAttribute("data-character-type");
  alert("The " + phone + " is the flagship phone of the manufacturer " + phoneManu.innerHTML);
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});

function validationForm(){
  let x = document.forms["contactForm"]["firstname", "lastname", "contactnum"].value;
  if (x == "") {
    alert("Details must be filled out");
    return false;
  }
}

function openForm(){
  document.getElementById("myForm").style.display = "block";
}

function closeForm(){
  document.getElementById("myForm").style.display = "none";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex=1};
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

var firstObject = { "name":"Wembley Stadium", "hometeam":"England", "Town":"Wembley", "City":"London" };
var myJSON = JSON.stringify(firstObject);
document.getElementById("stringifydemo").innerHTML = myJSON;
var secondObject = JSON.parse('{ "name":"Wembley Stadium", "hometeam":"England", "Town":"Wembley", "City":"London" }');
document.getElementById("stringifydemo2").innerHTML = secondObject.name + " is the home stadium for the "
 + secondObject.hometeam + " team and is located in " + secondObject.Town + ", " + secondObject.City;

 localStorage.setItem("operatingsystem", "macOS Monterey");
 document.getElementById("lsproperty").innerHTML = "The os being used is " + localStorage.getItem("operatingsystem");

 function dblFunction() {
  document.getElementById("dblclick").style.fontFamily = "Courier New";
 }
