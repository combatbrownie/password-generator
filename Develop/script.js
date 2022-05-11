// Assignment Code//selecting elment on page
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//additional notes 05102022
// list of special characters - !@#$%^&*()_+-
// list of numerical digits - 0123456789
// list of uppercase characters
// list of lowercase characters

// how many characters?
// is it 8 or more?
// no? send message
// use special characters?
// use numbers?
// use capital letters?
// use lower case letters?
// ------------------------------------------------------------
// put together the password
// combine the lists that were chosen
// pick a random character from the combined list and place it in the password up the chosen length

// function generatePassword () {}
// return "a password"
//how many passw characters
//validateLength(chosenLength)
//is it 8 or more characters
//no send message
//use special characters
//max letters = 128
//capital and lc lts
//puesdo code - flush out
//put together the pw - string or array of characters and upper/lower
//combine the lists that were chosen ...method of array or string
//list of special characters -
//pick a random character from the combined list and place it in the password up to the chosen length

//definite a function - generatepassword
// Add event listener to generate button when click occurs function triggers

generateBtn.addEventListener("click", writePassword);
