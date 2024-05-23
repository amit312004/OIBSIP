function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    let result = '';

    if (inputUnit === 'Celsius') {
        result = `${inputValue}°C is ${(inputValue * 9/5 + 32).toFixed(2)}°F`;
    } else if (inputUnit === 'Fahrenheit') {
        result = `${inputValue}°F is ${((inputValue - 32) * 5/9).toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = result;
}
