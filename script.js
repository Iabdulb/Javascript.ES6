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
    } else {
        result.innerHTML = "Invalid conversion type";
    }
}
