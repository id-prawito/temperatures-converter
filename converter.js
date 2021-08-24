// const btn = document.getElementById("convert"); //variabel button

// Pendeklarasian Variable saya comment karena di unit test nanti akan muncul error document not defined, dan akhirnya tidak saya buat variabel, tapi hal ini mengakibatkan
// syntaxnya banyak.

function Pres() {
    const degree = document.getElementById("degrees"); // variabel nilai suhu
    degree.placeholder = "";
    degree.style.border = "2px solid gray";
}

function Submit(event) {
    const degree = document.getElementById("degrees");
    const temperature = document.getElementById("from"); // variabel jenis suhu dari "form"
    const convertTo = document.getElementById("to"); // variabel jenis suhu dari "to"
    let result = document.getElementById("result"); // variabel daripada hasil

    event.preventDefault();
    if (degree.value === "") {
        setError(degree);
    } else {
        if (temperature.value === "f") {
            if (convertTo.value === "c") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 5/9 = " +
                    Math.floor(convert.fahrenheitToCelsius(degree.value)) +
                    "°C";
            } else if (convertTo.value === "k") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 5/9 + 273.15 = " +
                    convert.fahrenheitToKelvin(degree.value).toFixed(2) +
                    "K";
            } else if (convertTo.value === "r") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 4/9 = " +
                    Math.floor(convert.fahrenheitToReamur(degree.value)) +
                    "°Ré";
            } else {
                selectOption(convertTo, "c");
                document.getElementById("convert").click();
            }
        } else if (temperature.value === "c") {
            if (convertTo.value === "f") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C × 9/5) + 32 = " +
                    Math.floor(convert.celsiusToFahrenheit(degree.value)) +
                    "°F";
            } else if (convertTo.value === "k") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C + 273.15) = " +
                    convert.celsiusToKelvin(degree.value).toFixed(2) +
                    "K";
            } else if (convertTo.value === "r") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C x 4/5) = " +
                    Math.round(convert.celsiusToReamur(degree.value)) +
                    "°R";
            } else {
                selectOption(convertTo, "f");
                document.getElementById("convert").click();
            }
        } else if (temperature.value === "k") {
            if (convertTo.value === "f") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) × 9/5 + 32 = " +
                    convert.kelvinToFahrenheit(degree.value).toFixed(2) +
                    "°F";
            } else if (convertTo.value === "c") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) = " +
                    convert.kelvinToCelsius(degree.value).toFixed(2) +
                    "°C";
            } else if (convertTo.value === "r") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) × 4/5 = " +
                    convert.kelvinToReamur(degree.value).toFixed(2) +
                    "°R";
            } else {
                selectOption(convertTo, "f");
                document.getElementById("convert").click();
            }
        } else {
            if (convertTo.value === "f") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré * (9/4) + 32  = " +
                    Math.round(convert.reamurToFahrenheit(degree.value)) +
                    "°F";
            } else if (convertTo.value === "c") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré × 5/4) = " +
                    Math.round(convert.reamurToCelsius(degree.value)) +
                    "°C";
            } else if (convertTo.value === "k") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré * (5/4) + 273.15  = " +
                    convert.reamurToKelvin(degree.value).toFixed(2) +
                    "K";
            } else {
                selectOption(convertTo, "c");
                document.getElementById("convert").click();
            }
        }
    }
}

//Fungsi error ketika nilai belum di input
function setError(err) {
    err.style.border = "2px solid #ff0000";
    err.placeholder = "Input Number";
}

function selectOption(convert, newValue) {
    let opts = convert.options;
    for (let opt, j = 0; (opt = opts[j]); j++) {
        if (opt.value == newValue) {
            convert.selectedIndex = j;
            break;
        }
    }
}

class Convert {
    // Konversi Fahreirhet ke Kelvin, Celsius, dan Reamur
    fahrenheitToKelvin(f) {
        return ((parseInt(f) - 32) * 5) / 9 + 273.15;
    }
    fahrenheitToCelsius(f) {
        return ((parseInt(f) - 32) * 5) / 9;
    }
    fahrenheitToReamur(f) {
        return ((parseInt(f) - 32) * 4) / 9;
    }
    // Konversi Celsius ke Fahreinhet, Kelvin, dan Reamur
    celsiusToFahrenheit(c) {
        return (parseInt(c) * 9) / 5 + 32;
    }
    celsiusToKelvin(c) {
        return parseInt(c) + 273.15;
    }
    celsiusToReamur(c) {
        return (parseInt(c) * 4) / 5;
    }
    // Konversi Kelvin ke Fahreinhet, Celsius, dan Reamur
    kelvinToFahrenheit(k) {
        return (parseFloat(k) - 273.15) * (9 / 5) + 32;
    }
    kelvinToCelsius(k) {
        return parseInt(k) - 273.15;
    }
    kelvinToReamur(k) {
        return ((parseInt(k) - 273.15) * 4) / 5;
    }
    // Konversi Reamur ke Fahreinhet, Celsius, dan Kelvin
    reamurToFahrenheit(r) {
        return parseInt(r) * (9 / 4) + 32;
    }
    reamurToCelsius(r) {
        return parseInt(r) * (5 / 4);
    }
    reamurToKelvin(r) {
        return parseInt(r) * (5 / 4) + 273.15;
    }
}

const convert = new Convert();

module.exports = Convert;
