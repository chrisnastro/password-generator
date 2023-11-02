// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Acceptable password variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbol = "!@#$%^&*()?></;:[]-_"
var number = "1234567890"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let length = prompt("Select password length", "8-128 characters");
