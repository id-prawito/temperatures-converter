// const btn = document.getElementById("convert"); //variabel button
// const degree = document.getElementById("degrees"); // variabel nilai suhu
// const temperature = document.getElementById("from"); // variabel jenis suhu dari "form"
// const convertTo = document.getElementById("to"); // variabel jenis suhu dari "to"
// let result = document.getElementById("result"); // variabel daripada hasil

// Pendeklarasian Variable saya comment karena di unit test nanti akan muncul error document not defined, dan akhirnya tidak saya buat variabel, tapi hal ini mengakibatkan
// syntaxnya banyak.

function Pres() {
    document.getElementById("degrees").placeholder = "";
    document.getElementById("degrees").style.border = "2px solid gray";
}

function Submit(event) {
    event.preventDefault();
    if (document.getElementById("degrees").value === "") {
        setError(document.getElementById("degrees"));
    } else {
        if (document.getElementById("from").value === "f") {
            if (document.getElementById("to").value === "c") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°F − 32) × 5/9 = " +
                        Math.floor(
                            convert.fahrenheitToCelsius(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°C";
            } else if (document.getElementById("to").value === "k") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°F − 32) × 5/9 + 273.15 = " +
                        convert
                            .fahrenheitToKelvin(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "K";
            } else if (document.getElementById("to").value === "r") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°F − 32) × 4/9 = " +
                        Math.floor(
                            convert.fahrenheitToReamur(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°Ré";
            } else {
                selectOption(document.getElementById("to"), "c");
                document.getElementById("convert").click();
            }
        } else if (document.getElementById("from").value === "c") {
            if (document.getElementById("to").value === "f") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°C × 9/5) + 32 = " +
                        Math.floor(
                            convert.celsiusToFahrenheit(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°F";
            } else if (document.getElementById("to").value === "k") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°C + 273.15) = " +
                        convert
                            .celsiusToKelvin(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "K";
            } else if (document.getElementById("to").value === "r") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°C x 4/5) = " +
                        Math.round(
                            convert.celsiusToReamur(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°R";
            } else {
                selectOption(document.getElementById("to"), "f");
                document.getElementById("convert").click();
            }
        } else if (document.getElementById("from").value === "k") {
            if (document.getElementById("to").value === "f") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "K − 273.15) × 9/5 + 32 = " +
                        convert
                            .kelvinToFahrenheit(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "°F";
            } else if (document.getElementById("to").value === "c") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "K − 273.15) = " +
                        convert
                            .kelvinToCelsius(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "°C";
            } else if (document.getElementById("to").value === "r") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "K − 273.15) × 4/5 = " +
                        convert
                            .kelvinToReamur(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "°R";
            } else {
                selectOption(document.getElementById("to"), "f");
                document.getElementById("convert").click();
            }
        } else {
            if (document.getElementById("to").value === "f") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°Ré * (9/4) + 32  = " +
                        Math.round(
                            convert.reamurToFahrenheit(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°F";
            } else if (document.getElementById("to").value === "c") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°Ré × 5/4) = " +
                        Math.round(
                            convert.reamurToCelsius(
                                document.getElementById("degrees").value
                            )
                        ) +
                        "°C";
            } else if (document.getElementById("to").value === "k") {
                document.getElementById("result").innerText =
                    document.getElementById("result").textContent =
                        "(" +
                        document.getElementById("degrees").value +
                        "°Ré * (5/4) + 273.15  = " +
                        convert
                            .reamurToKelvin(
                                document.getElementById("degrees").value
                            )
                            .toFixed(2) +
                        "K";
            } else {
                selectOption(document.getElementById("to"), "c");
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
