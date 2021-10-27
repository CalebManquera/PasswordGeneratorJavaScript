// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// 1. Prompt the user for the password criteria
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var specialChar = 
["!", "#", "$", "%", "&", "(","*", "+", "-", "/", "<", ">", "?", "@", "[", "]", "^", "_"]


var numbers = [1,2,3,4,5,6,7,8,9,0];

function generatePassword() {
  console.log("Hey! You clicked the button!");

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var lengthPassword = parseInt(prompt ("How long would you like your password to be, it must be at least 8 characters no more than 128."))
  if(lengthPassword < 8 || lengthPassword > 128) {
    alert("Your password is not the right length, try again.")
    return('try again')
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page 

//  a. Password length 8 < 128
//  b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3.Generate password based on criteria



// 4. Display password to the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);