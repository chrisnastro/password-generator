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
var includeCharacter = "";

// Add event listener to generate button

var passwordLength = prompt("Please select your password length (8-128 characters)"); 

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Please select between 8-128 characters"); {
    passwordLength = prompt("Please select your password length (8-128 characters)")
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) 
    passwordLength = prompt("Please select your password length (8-128 characters)");
  }
} else {
  var uppercaseOption = confirm("Select 'OK' to include uppercase letters");
  var lowercaseOption = confirm("Select 'OK' to include lowercase letters");
  var symbolOption = confirm("Select 'OK' to include special symbols");
  var numberOption = confirm("Select 'OK' to include numbers");
}
if (uppercaseOption) {includeCharacter += uppercase;}
if (lowercaseOption) {includeCharacter += lowercase;}
if (symbolOption) {includeCharacter += symbol;}
if (numberOption) {includeCharaceter += number;}


generateBtn.addEventListener("click", function () { writePassword(getPassword()) });;