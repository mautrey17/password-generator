// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener to respond to button click
generateBtn.addEventListener("click", writePassword);

//array of potential password characters
var arrayLettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayLettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var arraySpecial = ["@", "/", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", ".", "<", ">"];


//Function to prompt for password criteria
function getCriteria() {
     //password prompt to determine length
    var pwLength = parseInt(prompt("Welcome to the best password generator on the web! How long would you like your password to be? Please enter a number between 8 and 128"));
     
    //conditional statement to make sure password length is entered as a number
    if (isNaN(pwLength) === true) {
         alert("Number of components must be provided as a number");
         return;
     }

     //conditional to check if password is at least 8 characters long
     if (pwLength < 8) {
         console.log("hi")
         alert("Please enter a valid and safe number between 8 and 128");
         return;
     }

     //conditional to check if password is 128 characters or less
     if (pwLength > 128) {
        alert("Please enter a valid and safe number between 8 and 128");
        return;
    }

    //user prompts to determine what the password will contain
    var pwLowerCase = confirm("Would like your password to contain  lower case letters? Please select ok for yes or cancel for no");

    var pwUpperCase = confirm("Would like your password to contain  lower case letters? Please select ok for yes or cancel for no");

    var pwNumbers = confirm("Would you like your password to include numbers? Please select ok for yes or cancel for no");
  
    var pwSpecial = confirm("Would you like your password to include special characters? Please select ok for yes or cancel for no");
     

     //conditional to ensure password has at least 1 criteria
     if(
         pwLowerCase === false &&
         pwUpperCase === false &&
         pwNumbers === false &&
         pwSpecial === false
     ){
         alert("Password must contain at least one type of character")
     }

     //object to store user input
     var pwCriteria = {
         pwLength: pwLength,
         pwLowerCase: pwLowerCase,
         pwUpperCase: pwUpperCase,
         pwNumbers: pwNumbers,
         pwSpecial: pwSpecial
     };
     return pwCriteria;
     
}


//Random function to pull from arrays
function getRandom(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    var randElement = array[randIndex];

    return randElement;
}

//Create password based on user input
function createPassword(){
    var components = getCriteria();

    //final password
    var newPassword = [];

    //arrays to hold available characters and one character from each requested prompt
    var possibleComponents = [];
    var guaranteedComponents = [];

    //These conditional statements check the object with user input to see what characters to include. The entire list is moved to the possible array and 1 character to the guaranteed array
    if (components.pwLowerCase){
        possibleComponents = possibleComponents.concat(arrayLettersLower);
        guaranteedComponents.push(getRandom(arrayLettersLower));
    }

    if (components.pwUpperCase){
        possibleComponents = possibleComponents.concat(arrayLettersUpper);
        guaranteedComponents.push(getRandom(arrayLettersUpper));
    }

    if (components.pwNumbers){
        possibleComponents = possibleComponents.concat(arrayNumbers);
        guaranteedComponents.push(getRandom(arrayNumbers));
    }

    if (components.pwSpecial){
        possibleComponents = possibleComponents.concat(arraySpecial);
        guaranteedComponents.push(getRandom(arraySpecial));
    }

    //loop to pull requested number of characters from the possible password
    for (i=0; i < components.pwLength; i++){
        var possibleComponent = getRandom(possibleComponents);
        newPassword.push(possibleComponent);
    }

    //loop to replace pieces of the generated array with guaranteed characters
    for (i=0; i < guaranteedComponents.length; i++){
        newPassword[i] = guaranteedComponents[i];
    }
    return newPassword.join('');
}