

function validate() {
    const display = document.getElementById("display").value
    const email = document.getElementById("email").value
    const number = document.getElementById("number").value
    const zip = document.getElementById("zip").value
    const password = document.getElementById("password").value
    const passwordCon = document.getElementById("confirm").value
    let valid = true;
    if(!validEmail(email) && email.trim() !== "") {
        document.getElementById("emailAlert").innerHTML = "Invalid Email"
        valid = false;
    }
    if(!validNumber(number) && number.trim() !== "") {
        document.getElementById("numberAlert").innerHTML = "Invalid Phone Number"
        valid = false;
    }
    if(!validZip(zip) && zip.trim() !== "") {
        document.getElementById("zipAlert").innerHTML = "Invalid Zip Code"
        valid = false;
    }
    if(!validPasswords(password,passwordCon) && password.trim() !== "") {
        document.getElementById("passwordAlert").innerHTML = "Invalid Password"
        valid = false;
    }

    if(valid) {
        if(display.trim() !== "") {
            document.getElementById("displayLabel").innerHTML = "Display Name: " + display
            document.getElementById("display").value = ""
        }
        if(email.trim() !== "") {
            document.getElementById("emailLabel").innerHTML = "Email Address: " + email;
            document.getElementById("email").value ="";
            document.getElementById("emailAlert").innerHTML = ""
            document.getElementById("email").size = document.getElementById("emailLabel").innerHTML.length;
        }
        if(number.trim() !== "") {
            document.getElementById("numberLabel").innerHTML = "Phone Number: " + number;
            document.getElementById("number").value ="";
            document.getElementById("numberAlert").innerHTML = ""
            document.getElementById("number").size = document.getElementById("numberLabel").innerHTML.length;
        }
        if(zip.trim() !== "") {
            document.getElementById("zipLabel").innerHTML = "Zip Code: " + zip;
            document.getElementById("zip").value ="";
            document.getElementById("zipAlert").innerHTML = ""
            document.getElementById("zip").size = document.getElementById("zipLabel").innerHTML.length;
        }
        if(password.trim() !== "") {
            document.getElementById("passwordLabel").innerHTML = "Password: " + "*".repeat(password.length);
            document.getElementById("password").value ="";
            document.getElementById("passwordAlert").innerHTML = ""
            document.getElementById("password").size = document.getElementById("passwordLabel").innerHTML.length;
        }
    }

}

function validEmail(email) {
    if(email.split("@").length === 2 && email.split(".").length === 2 && email.lastIndexOf("@") < email.lastIndexOf(".")) {
        const emailName = email.split("@")[0]
        const siteName = email.split("@")[1].split(".")[0]
        const siteExtension = email.split("@")[1].split(".")[1]
        return emailName.match(/^[a-z0-9]+$/i) !== null
            && emailName !== "" && emailName.trim() === emailName
            && siteName.match(/^[a-z0-9]+$/i) !== null
            && siteName !== "" && siteName.trim() === siteName
            && siteExtension.match(/^[a-z0-9]+$/i) !== null
            && siteExtension !== "" && siteExtension.trim() === siteExtension;
    } else {
        return false
    }
}

function validNumber(number) {
    if(number.split("-").length === 3) {
        const num = number.split("-")[0] + number.split("-")[1] + number.split("-")[2]
        return num.length === 10 && num.match(/^[z0-9]+$/i) !== null
    } else {
        return false
    }
}

function validZip(zipCode) {
    return zipCode.match(/^[z0-9]+$/) !== null
}

function validPasswords(password, confirmation) {
    return password === confirmation

}

function init() {
}