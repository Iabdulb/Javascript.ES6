function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var conversionType = document.getElementById('conversionType').value;
    var result = 0;

    if (inputValue >= 1 && inputValue <= 5000) {
        if (conversionType === "cmToInches") {
            result = inputValue * 0.393701;
        } else if (conversionType === "inchesToCm") {
            result = inputValue / 0.393701;
        }
        if (conversionType === "CelsiusToFahrenheit") {
            result = inputValue * 89.6;
            else if (conversionType === "FahrenheitToCelsius") {
                result = inputValue / 0;
        // Add other conversion options here

        document.getElementById('result').innerHTML = "Result: " + result.toFixed(2);
    } else {
        document.getElementById('result').innerHTML = "Please enter a value between 1 and 5000.";
    }
}
