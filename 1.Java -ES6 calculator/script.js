function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsiusInput').value = celsius.toFixed(2);
    document.getElementById('result').innerText = celsius.toFixed(2) + '°C';
}

function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    document.getElementById('result').innerText = fahrenheit.toFixed(2) + '°F';
}