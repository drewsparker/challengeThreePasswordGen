var generateBtn = document.getElementById("generate");

function generatePassword(numCharacters, specialCharacters, lowercase, uppercase, numbers) {

    var characters = []
    if (specialCharacters === true) {
        for (var i = 33; i <= 47; i++) {
            characters.push(i);
        }
    }
    if (lowercase === true) {
        for (var i = 97; i <= 122; i++) {
            characters.push(i);
        }
    }
    if (uppercase === true) {
        for (var i = 65; i <= 90; i++) {
            characters.push(i);
        }
    }
    if (numbers === true) {
        for (var i = 48; i <= 57; i++) {
            characters.push(i);
        }
    }

    var convertedChar = []
    for (var i = 0; i < characters.length; i++) {
        convertedChar.push(String.fromCharCode(characters[i]));
    }
    var password = "";
    for (var i = 0; i < numCharacters; i++) {
        password += convertedChar[Math.floor(Math.random() * convertedChar.length)];
    }
    return password;
}
// Write password to the #password input
function writePassword(password) {
    var passwordText = document.getElementById("password");

    passwordText.value = password;
}

function collectData() {


    var numCharacters = window.prompt("Choose a password length between 8 and 128 characters.");

    if (!numCharacters || numCharacters < 8 || numCharacters > 128) {
        alert("Please enter valid number.");
        return;
    }

    var specialCharacters = window.confirm("Would you like special characters?");


    var lowercase = window.confirm("Would you like lowercase characters?");


    var uppercase = window.confirm("Would you like uppercase characters?");


    var numbers = window.confirm("Would you like numbers in your random password?");

    if (!specialCharacters && !lowercase && !uppercase && !numbers) {
        alert("Please select at least one option to include.")
        return;
    }


    var password = generatePassword(numCharacters, specialCharacters, lowercase, uppercase, numbers);
    console.log(password)
    writePassword(password)
}

generateBtn.addEventListener("click", collectData);


