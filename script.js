// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// 1. Prompt the user for the password criteria
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var specialChar = 
["!", "#", "$", "%", "&", "(","*", "+", "-", "/", "<", ">", "?", "@", "[", "]", "^", "_"]


var numbers = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword() {
  console.log("Hey! You clicked the button!");
  var selectedConditions = []
  var password = "";
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var lengthPassword = parseInt(prompt ("How long would you like your password to be, it must be at least 8 characters no more than 128."))
  if(lengthPassword < 8 || lengthPassword > 128) {
    alert("Your password is not the right length, try again.")
    return('try again')
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var isUppercase = confirm("would you like uppercase letters?");
  var isLowercase = confirm("would you like lowercase letters?");
  var isNumeric = confirm("would you like numbers?");
  var isSpecial = confirm("would you like special characters?");
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if(!isUppercase && !isLowercase && !isNumeric && !isSpecial){
    alert("At least one type character type should be selected")
    return('try again')
  }
  if(isUppercase){
    selectedConditions = selectedConditions.concat(uppercaseChar)
  }
  if(isLowercase){
    selectedConditions = selectedConditions.concat(lowercaseChar)
  }
  if(isSpecial){
    selectedConditions = selectedConditions.concat(specialChar)
  }
  if(isNumeric){
    selectedConditions = selectedConditions.concat(numbers)
  }
  
  var randomArr = []
  for(var index = 0; index < selectedConditions.length; index++){
    var randomIndex = Math.floor(Math.random() * selectedConditions.length);
    randomArr.push(selectedConditions[randomIndex])
  }
  for (var index = 0; index < lengthPassword; index++){
    var randomIndex = Math.floor(Math.random() * randomArr.length);
    password = password + randomArr[randomIndex]
  }
  // THEN a password is generated that matches the selected criteria
  return password 
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