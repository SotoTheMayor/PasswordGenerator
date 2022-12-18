// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    //define potential characters and array used for concatenating choices
    let lowerAvail = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
    let upperAvail = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
    let numerAvail = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
    let specialAvail = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", ":"] ;
    let passConcat = [] ;

//prompt for password length and constraints to prevent unacceptable inputs
    let passLength = prompt("Enter password character lenth, must be betwee 8 and 128");
      parseInt(passLength);
      if (isNaN(passLength)) {
        alert ("You must input a number");
        return null;
      } else if (passLength > 128) {
        alert ("You must choose a length less than 129");
        return null;
      }  else if (passLength < 8) {
        alert ("You must choose a length greater than 7");
        return null;
      } 

//prompts for character types user wants included and concatenating available character pool
      let passLower ; 
        if (confirm("Should your password include lower case letters?") == true) {
          passLower = "Yes" ;
          passConcat = passConcat.concat(lowerAvail) ;
        } else {
          passLower = "No" ;
        };
      let passUpper ; 
        if (confirm("Should your password include upper case letters?") == true) {
          passUpper = "Yes" ;
          passConcat = passConcat.concat(upperAvail) ;
        } else {
          passUpper = "No" ;
        };
      let passNumer ; 
        if (confirm("Should your password include numeric values?") == true) {
          passNumer = "Yes" ;
          passConcat = passConcat.concat(numerAvail) ;
        } else {
          passNumer = "No" ;
        };
      let passSpecial ; 
        if (confirm("Should your password include special characters?") == true) {
          passSpecial = "Yes" ;
          passConcat = passConcat.concat(specialAvail) ;
        } else {
          passSpecial = "No" ;
        };

//preventing user from not selecting any character types
      if (passLower) ;
      else if (passUpper) ;
      else if (passNumer) ;
      else if (passSpecial) ;
      else {
        alert ("You must choose at least one character type")
        return null;
      }

//function to generate password based on user selections
      var createResult = function() {
        let passResult = [] ;
        for (var i = 0; i < passLength; i++) {
          passResult.push(passConcat[Math.floor(Math.random() * passConcat.length)]);
        }
        passResult = passResult.join('');
        return passResult ;
      }

//final input validation and return of final password if accepted
      if (confirm("Selected Password Criteria:\n" + "Password Length:   " + passLength + "\n" + "Lower Case?:   " + passLower + "\n" + "Upper Case?:   " + passUpper + "\n" + "Numeric values?:   " + passNumer + "\n" + "Special characters?:   " + passSpecial) == true) {
        return createResult() ;
      } else {
        return null;
      }      
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
