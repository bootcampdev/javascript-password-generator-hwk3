// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Special characters that can be included in password
var special_chars = " !" + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\"";

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

  console.log(password_char_types);
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

  // Valid types of password characters Upper, Lower, Numeric, Special
  var valid_types = "U L N S";

  var types = prompt("Please enter the type of characters needed for your password.  They can be Uppercase, Lowercase, Numeric and or Special characters.  Seperate your options with a comma if you have more than 1.  \nYou must choose a least one.\n  For example: U,L,N for upper, lower and numeric characters, or s,n for special and numberic characters only.");

  var type_arr = types.toUpperCase().split(",");

  for (var i=0; i<type_arr.length; i++)
  {
    if (!valid_types.includes(type_arr[i]))
    {
      type_arr = null;
    }
  }
  return(type_arr);
}


