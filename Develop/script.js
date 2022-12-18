// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
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
        } else {
          passLower = false ;
        };
      let passUpper ; 
        if (confirm("Should your password include upper case letters?") == true) {
          passUpper = true ;
        } else {
          passUpper = false ;
        };
      let passNumer ; 
        if (confirm("Should your password include numeric values?") == true) {
          passNumer = true ;
        } else {
          passNumer = false ;
        };
      let passSpecial ; 
        if (confirm("Should your password include special characters?") == true) {
          passSpecial = true ;
        } else {
          passSpecial = false ;
        };

    console.log(passLength) ;
    console.log(passLower) ;
    console.log(passUpper) ;
    console.log(passNumer) ;
    console.log(passSpecial) ;

      if (passLower) ;
      else if (passUpper) ;
      else if (passNumer) ;
      else if (passSpecial) ;
      else {
        alert ("You must choose at least one character type")
        return null;
      }
      if (confirm("Selected Password Criteria:\n" + "Password Length:   " + passLength + "\n" + "Lower Case?:   " + passLower + "\n" + "Upper Case?:   " + passUpper + "\n" + "Numeric values?:   " + passNumer + "\n" + "Special characters?:   " + passSpecial) == true) {
        return "Success" ;
      } else {
        return null;
      }
      
}
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
