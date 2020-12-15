// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//array of potential password characters
var arrayLettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayLettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var arraySpecial = ["@", "/", "?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", ".", "<", ">"]




function generatePassword() {
  //password prompts
  var pwLetterCase = confirm("Would like your password to contain a mix of upper and lower case letters? Please select ok for yes or cancel for no");
  var pwNumbers = confirm("Would you like your password to include numbers? Please select ok for yes or cancel for no");
  var pwSpecial = confirm("Would you like your password to include special characters? Please select ok for yes or cancel for no");
  var pwLength = prompt("Welcome to the best password generator on the web! How long would you like your password to be? Please enter a number between 8 and 128");
  var newPassword = [];


  //make sure password length is a valid entry
  if(parseInt(pwLength) >= 8  && parseInt(pwLength) <= 128){

    //Upper and lower case letters, numbers, and special characters
    if(pwLetterCase && pwNumbers && pwSpecial){
      var array123 = arrayLettersLower.concat(arrayLettersUpper, arrayNumbers, arraySpecial);
      
      newPassword = counter(array123, pwLength);
    }
    
    //Upper and lower case letters, and numbers
    else if(pwLetterCase && pwNumbers && pwSpecial === false){
      var array12 = arrayLettersLower.concat(arrayLettersUpper, arrayNumbers);
      newPassword = counter(array12, pwLength);
    }

    //Upper and lower case letters, and special characters
    else if(pwLetterCase && pwNumbers === false && pwSpecial){
      var array13 = arrayLettersLower.concat(arrayLettersUpper, arraySpecial);
      newPassword = counter(array13, pwLength);
    }

    //lower case letters, numbers, and special characters
    else if(pwLetterCase === false && pwNumbers && pwSpecial){
      var array23 = arrayLettersLower.concat(arrayNumbers, arraySpecial);
      newPassword = counter(array23, pwLength);
    }

    //Upper and lower case letters
    else if(pwLetterCase && pwNumbers === false && pwSpecial===false){
      var array1 = arrayLettersLower.concat(arrayLettersUpper);
      newPassword = counter(array1, pwLength);
    }

    //lower case letters and numbers
    else if(pwLetterCase  === false && pwNumbers && pwSpecial===false){
      var array2 = arrayLettersLower.concat(arrayNumbers);
      newPassword = counter(array2, pwLength);
    }

    //lower case letters and special characters
    else if(pwLetterCase  === false && pwNumbers===false && pwSpecial){
      var array3 = arrayLettersLower.concat(arraySpecial);
      newPassword = counter(array3, pwLength);
    }

    //lower case letters
    else{
      newPassword = counter(arrayLettersLower, pwLength);
    }
    return newPassword;
    
  }
  else{
    alert("Error! Please restart and enter a valid number");
    return "Please input a valid number"
  }



}
//generates random entries for password based on desired length
function counter (arrayCharacter, pwLength){
  var newPassword = [];
  for(i=0;i<pwLength;i++){
  
  newPassword.push(arrayCharacter[Math.floor(Math.random() * arrayCharacter.length)]);
  
  }
  return newPassword.join('');
  
}