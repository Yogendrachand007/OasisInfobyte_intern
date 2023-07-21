document.getElementById("convertBtn").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature").value;
    const selectedUnit = document.getElementById("unit").value;

    // Validate temperature input
    if (isNaN(temperatureInput) || temperatureInput === "") {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    // Convert temperature based on selected unit
    const temperature = parseFloat(temperatureInput);
    let result;
    switch (selectedUnit) {
        case "Celsius":
            result = celsiusToOtherUnits(temperature);
            break;
        case "Kelvin":
            result = kelvinToOtherUnits(temperature);
            break;
        case "Fahrenheit":
            result = fahrenheitToOtherUnits(temperature);
            break;
    }

    // Display the result
    document.getElementById("result").textContent = result;
});

function celsiusToOtherUnits(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    return `${celsius.toFixed(2)} °C is equivalent to ${fahrenheit.toFixed(2)} °F and ${kelvin.toFixed(2)} K.`;
}

function kelvinToOtherUnits(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;
    return `${kelvin.toFixed(2)} K is equivalent to ${celsius.toFixed(2)} °C and ${fahrenheit.toFixed(2)} °F.`;
}

function fahrenheitToOtherUnits(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const kelvin = celsius + 273.15;
    return `${fahrenheit.toFixed(2)} °F is equivalent to ${celsius.toFixed(2)} °C and ${kelvin.toFixed(2)} K.`;
}
