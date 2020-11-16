// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var password_char_ct = getPasswordCharCt();  
  console.log(password_char_ct);

  if (password_char_ct != null)
    var password_char_types = getPasswordCharTypes();
}

function getPasswordCharCt() {
  var ct =  prompt("Please answer the following question for your password.\n The number of characters for your password?", "8");

  if (parseInt(ct) < 8) {
    alert("The minimal password size is 8 (max 128).  Please re-enter");
    ct = null;
  }

  return ct;
}

function getPasswordCharTypes() {
  var types = prompt("Please enter the type of characters needed for your password.  They can be Uppercase, Lowercase, Numeric and or Special characters.  Seperate your options with a comma if you have more than 1.  \nYou must choose a least one.\n  For example: U,L,N for upper, lower and numeric characters, or s,n for special and numberic characters only.");

  return(types.split(","));
}


