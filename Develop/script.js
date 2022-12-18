// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var passLower = 0;
var passUpper = 0;
var passNumer = 0;
var passSpecial = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    let lowerAvail = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
    let upperAvail = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
    let numerAvail = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
    let specialAvail = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", ":"] ;
    let passConcat = [] ;
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

      let passLower ; 
        if (confirm("Should your password include lower case letters?") == true) {
          passLower = true ;
          passConcat = passConcat.concat(lowerAvail) ;
        } else {
          passLower = false ;
        };
      let passUpper ; 
        if (confirm("Should your password include upper case letters?") == true) {
          passUpper = true ;
          passConcat = passConcat.concat(upperAvail) ;
        } else {
          passUpper = false ;
        };
      let passNumer ; 
        if (confirm("Should your password include numeric values?") == true) {
          passNumer = true ;
          passConcat = passConcat.concat(numerAvail) ;
        } else {
          passNumer = false ;
        };
      let passSpecial ; 
        if (confirm("Should your password include special characters?") == true) {
          passSpecial = true ;
          passConcat = passConcat.concat(specialAvail) ;
        } else {
          passSpecial = false ;
        };

    console.log(passLength) ;
    console.log(passLower) ;
    console.log(passUpper) ;
    console.log(passNumer) ;
    console.log(passSpecial) ;
    console.log(passConcat) ;

      if (passLower) ;
      else if (passUpper) ;
      else if (passNumer) ;
      else if (passSpecial) ;
      else {
        alert ("You must choose at least one character type")
        return null;
      }
      var createResult = function() {
        let passResult = [] ;
        for (var i = 0; i < passLength; i++) {
          passResult += passResult.push(passConcat[Math.floor(Math.random() * passConcat.length)]);
          console.log(passResult);
          return passResult ;
        }
      }
      if (confirm("Selected Password Criteria:\n" + "Password Length:   " + passLength + "\n" + "Lower Case?:   " + passLower + "\n" + "Upper Case?:   " + passUpper + "\n" + "Numeric values?:   " + passNumer + "\n" + "Special characters?:   " + passSpecial) == true) {
        //console.log(passResult) ;
        return createResult() ;
      } else {
        return null;
      }
      
}
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
