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
  var pwLetterCase = confirm("Would like your password to contain a mix of upper and lower case letters? Please answer yes or no");
  var pwNumbers = confirm("Would you like your password to include numbers? Please answer yes or no");
  var pwSpecial = confirm("Would you like your password to include special characters? Please answer yes or no");
  var pwLength = prompt("Welcome to the best password generator on the web! How long would you like your password to be? Please enter a number between 8 and 128");

  // 
  //   for(i=0;i<pwLength;i++){
  //     var newPassword = [];
  //     newPassword.push(characterArray[Math.floor(Math.random() * characterArray.length)]);
      
  //   }
  // }

  // function counter(characterArray){
  
  // for(i=0;i<pwLength;i++){
        
  //   newPassword.push(array123[Math.floor(Math.random() * array123.length)]);
    
  // }
  // }

  if(parseInt(pwLength) < 8 || parseInt(pwLength) > 128){
    alert("Error! Please restart and enter a valid number");
  }
  else{

    if(pwLetterCase && pwNumbers && pwSpecial){
      var array123 = arrayLettersLower.concat(arrayLettersUpper, arrayNumbers, arraySpecial);
      // 
      var newPassword = [];
      for(i=0;i<pwLength;i++){
          
        newPassword.push(array123[Math.floor(Math.random() * array123.length)]);
      }
      
    }
  
    else if(pwLetterCase && pwNumbers && pwSpecial === false){
      var array12 = arrayLettersLower.concat(arrayLettersUpper, arrayNumbers);
      console.log(array12);
    }
    else if(pwLetterCase && pwNumbers === false && pwSpecial){
      var array13 = arrayLettersLower.concat(arrayLettersUpper, arraySpecial);
      console.log(array13);
    }
    else if(pwLetterCase === false && pwNumbers && pwSpecial){
      var array23 = arrayLettersLower.concat(arrayNumbers, arraySpecial);
      console.log(array23);
    }
    else if(pwLetterCase && pwNumbers === false && pwSpecial===false){
      var array1 = arrayLettersLower.concat(arrayLettersUpper);
      console.log(array1);
    }
    else if(pwLetterCase  === false && pwNumbers && pwSpecial===false){
      var array2 = arrayLettersLower.concat(arrayNumbers);
      console.log(array2);
    }
    else if(pwLetterCase  === false && pwNumbers===false && pwSpecial){
      var array3 = arrayLettersLower.concat(arraySpecial);
      console.log(array3);
    }
    return newPassword.join('');
  }



}

