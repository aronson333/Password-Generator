// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // calling/running the generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)

  passwordText.value = password;

}

function generatePassword() {
  let Password = "";

  // passwordLength is NOT a number, it is a string
  // TODO: convert passwordLength to a number
  var passwordLength = window.prompt("enter length of password");
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password length must be 8 or greater but less than 128");
    // exit the function
    return;
  }
  var capital = window.confirm("would you like to use capital letters?");
  console.log("capital", capital);

  var lowercase = window.confirm("would you like to use lowercase letters");
  console.log("lowercase", lowercase);

  var numbers = window.confirm("would you like to use numbers");
  console.log("numbers", numbers);

  var characters = window.confirm("would you like to use characters");
  console.log("characters", characters);

  // my input should be validated and at least one character type should be selected
  if (!capital && !lowercase && !numbers && !characters) {
    alert('At least one character type should be selected')
    return
  }
 
  // generate a password that matches the selected criteria
  // create a list of lowercase letters
  var allLowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  // create a list of capital letters
  var allCapitalLetters = allLowercaseLetters.toUpperCase()
  // create a list of numbers
  var allNumbers = "0123456789";
  // create a list of special characters
  var allSpecialCharacters = "!@#$%^&*";
  // create a list of all the characters that fit the criteria

  var allPossibleCharacters = ""

  if (capital) {
    allPossibleCharacters += allCapitalLetters;
  }

  if (lowercase) {
    allPossibleCharacters += allLowercaseLetters;
  }

  if (characters) {
    allPossibleCharacters += allSpecialCharacters;
  }

  if (numbers) {
    // allPossibleNumbers += allNumbers;
    allPossibleCharacters += allNumbers;
  }

  // loop from 0 to passwordLength
  for (var i = 0; i < passwordLength; i++) {
    // grab one random character from allPossibleCharacters
    // append that to Password

    let randomNumber = getRandomInt(allPossibleCharacters.length - 1)
    let randomCharacter = allPossibleCharacters[randomNumber]
    Password += randomCharacter
  }
  // ex. if capital is true, then grab from the list of capital letters
  // ex2. if capital & numbers & characters is true, then grab a character from one
  // of those lists

  return Password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
