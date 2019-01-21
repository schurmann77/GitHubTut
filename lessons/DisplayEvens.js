function validateNumbers() {
    var num1 = document.forms["displayEvens"]["startingNumber"].value;
    var num2 = document.forms["displayEvens"]["endingNumber"].value;
    var step = document.forms["displayEvens"]["step"]
    var mathResult;

    for(i = 0; num1 < num2; i++) {
        var check = num1 + step;
        if (check % 2) {
            mathResult = check;
        }
    }

    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be an integer.");
        document.forms["displayEvens"]["startingNumber"].parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startingNumber"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Ending number must be an integer.");
        document.forms["displayEvens"]["endingNumber"].parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["endingNumber"].focus();
        return false;
    }
    if (step == "" || isNaN(step)) {
        alert("Step number must be an integer.");
        document.forms["displayEvens"]["step"].parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["step"].focus();
    }

    document.getElementById("results").style.display = "block"
    document.getElementById("results").innerText = mathResult;
    document.getElementById("addResult").innerText = mathResult
    return false;
}