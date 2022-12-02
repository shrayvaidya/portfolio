
document.addEventListener("DOMContentLoaded", function(){
  console.log("this is a website about me!");
});

function validateForm() {
let x1 = document.forms["myForm"]["FirstName"].value;
if (x2 == "") {
  alert("Name must be filled out");
  return false;
}
let x2 = document.forms["myForm"]["LastName"].value;
if (x2 == "") {
  alert("Name must be filled out");
  return false;
}
let y = document.forms["myForm"]["Email"].value;
if (y == "") {
  alert("Email must be filled out properly");
  return false;
}
let z = document.forms["myForm"]["Message"].value;
if (z == "") {
  alert("Message must be filled out properly");
  return false;
}
let a = document.forms["myForm"]["Location"].value;
if (a=="") {
  alert("Location must be filled out properly");
  return false;
}
}