var firstName = document.getElementById("txtFName");
var lastName = document.getElementById("txtLName");
var mi = document.getElementById("txtMI");

function greeter() {
  var display = `Hello ${firstName.value} ${mi.value}. ${lastName.value}`;
  document.getElementById("yourName").innerHTML = display;
}