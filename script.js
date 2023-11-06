var passwordText = document.querySelector("#password");

function generatePassword(randomPassword) {

  passwordText.value = randomPassword;
  alert(randomPassword);
}
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", function () {generatePassword(writePassword())})

function writePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var symbol = "!@#$%^&*()?></;:[]-_"
  var number = "1234567890"
  var includeCharacter = "";
  var randomPassword = "";
  var passwordLength = prompt("Please select your password length (8-128 characters)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please choose between 8-128 characters, click 'Generate Password', and try again");

  } else {
    var uppercaseOption = confirm("Select 'OK' to include uppercase letters");
    var lowercaseOption = confirm("Select 'OK' to include lowercase letters");
    var symbolOption = confirm("Select 'OK' to include special symbols");
    var numberOption = confirm("Select 'OK' to include numbers");
  }
  if (uppercaseOption) {includeCharacter += uppercase;}
  if (lowercaseOption) {includeCharacter += lowercase;}
  if (symbolOption) {includeCharacter += symbol;}
  if (numberOption) {includeCharacter += number;}

  for (i = 0; i < passwordLength; i++) {
    randomPassword += includeCharacter[Math.floor(Math.random() * includeCharacter.length)]
  }
  return (randomPassword);
}