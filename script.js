// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
// Initialize the possible characters types
// Special characters that can be included in password

var special_chars = " !" + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\"";
var lower_chars = "abcdefghijklmnopqrstuvwxyz";
var upper_chars = lower_chars.toUpperCase();
var numeric_chars = "0123456789";

//
// User choice of password characters

var user_chars = "";

//
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password.length === 0)
    alert("Invalid input");
  else    
    passwordText.value = password;
}

//
// To generate the password - get the password length
// and the type of chars for the password

function generatePassword() {
  user_chars = "";
  var password_char_ct = getPasswordCharCt();  

  if (password_char_ct != null)
    var password_char_types = getPasswordCharTypes();

  var password = "";
  for (var i=0; i<password_char_ct; i++)
  {
    //Generate password from the user choice of characters list

    password += user_chars.charAt(Math. floor(Math. random() * user_chars.length));
  }

  return password;
}

//
// Get the password count and check if it meets the criteria

function getPasswordCharCt() {
  var ct =  prompt("Please answer the following question for your new password.\n The number of characters for your password?", "8");

  if (isNaN(ct) || parseInt(ct) < 8 || parseInt(ct) > 128) {
    alert("The minimal password size is 8 (max 128) and must be numeric.  Please try again");
    ct = null;   
  }

  return ct;
}

//
// Build the possible types of characters for the password

function getPasswordCharTypes() {

  // Valid types of password characters Upper, Lower, Numeric, Special

  var valid_types = "U L N S";

  var types = prompt("Please enter the type of characters needed for your password.  They can be Uppercase (u), Lowercase (l), Numeric (n) and or Special characters (s).  Seperate your options with a comma if you have more than 1. \nYou must choose a least one. \nFor example: U,L,N for upper, lower and numeric characters, or S,N for special and numberic characters only.");

  var type_arr = types.toUpperCase().split(",");

  for (var i=0; i<type_arr.length; i++)
  {
    if (valid_types.includes(type_arr[i]))
    {    
      if (type_arr[i] === 'U')
        user_chars = user_chars + upper_chars;
      else if (type_arr[i] === 'L')      
        user_chars = user_chars + lower_chars;
      else if (type_arr[i] === 'N')      
        user_chars = user_chars + numeric_chars;
      else if (type_arr[i] === 'S')      
        user_chars = user_chars + special_chars;
    }

  }
  return(type_arr);
}


