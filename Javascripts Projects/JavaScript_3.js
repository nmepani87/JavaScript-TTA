function displayType(phoneManu) {
  var phone = phoneManu.getAttribute("data-character-type");
  alert("The " + phone + " is the flagship phone of the manufacturer " + phoneManu.innerHTML);
}