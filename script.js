// script.js

function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var conversionType = document.getElementById("conversionType").value;
    var result = document.getElementById("result");

    if (conversionType === "cmToInches") {
        result.innerHTML = inputValue * 0.393701;
    } else if (conversionType === "inchesToCm") {
        result.innerHTML = inputValue * 2.54;
    } else if (conversionType === "CelsiusToFahrenheit") {
        result.innerHTML = (inputValue * 9 / 5) + 32;
    } else if (conversionType === "FahrenheitToCelsius") {
        result.innerHTML = (inputValue - 32) * 5 / 9;
    } else if (conversionType === "sqFeetToYard") {
        result.innerHTML = inputValue / 9;
    } else if (conversionType === "yardToSqFeet") {
        result.innerHTML = inputValue * 9;
    } else if (conversionType === "kmToMiles") {
        result.innerHTML = inputValue / 1.60934;
    } else if (conversionType === "milesToKm") {
        result.innerHTML = inputValue * 1.60934;
    } else {
        result.innerHTML = "Invalid conversion type";
    }
}

function checkGrade() {
    var gradeInput = document.getElementById("gradeInput").value;
    var gradeResult = document.getElementById("gradeResult");

    if (gradeInput >= 80) {
        gradeResult.innerHTML = "A+";
    } else if (gradeInput >= 70 && gradeInput <= 79) {
        gradeResult.innerHTML = "A";
    } else if (gradeInput >= 60 && gradeInput <= 69) {
        gradeResult.innerHTML = "B";
    } else if (gradeInput >= 50 && gradeInput <= 59) {
        gradeResult.innerHTML = "C";
    } else if (gradeInput < 50 && gradeInput >= 0) {
        gradeResult.innerHTML = "F";
    } else {
        gradeResult.innerHTML = "Invalid input";
    }
}
