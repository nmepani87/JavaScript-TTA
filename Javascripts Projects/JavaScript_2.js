function validateForm() {
    let x = document.forms["myForm"]["firstname", "lastname", "emailadd", "contactnum"].value;
    if (x == "") {
      alert("All details must be filled out");
      return false;
    }
  }