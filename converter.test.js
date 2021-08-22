const Convert = require("./converter");

// Unit Test untuk Konversi Suhu dari Fahreinhet ke Kelvin, Celsius, dan Reamur
test("Fahreinhet to Kelvin", () => {
    const transform = new Convert();
    expect(transform.fahrenheitToKelvin(5)).toBe(258.15);
});
test("Fahreinhet to Celcius", () => {
    const transform = new Convert();
    expect(transform.fahrenheitToCelsius(5)).toBe(-15);
});
test("Fahreinhet to Reamur", () => {
    const transform = new Convert();
    expect(transform.fahrenheitToReamur(5)).toBe(-12);
});

// Unit Test untuk Konversi Suhu dari Celsius ke Fahreinhet, Kelvin, dan Reamur
test("Celcius to Fahrenheit", () => {
    const transform = new Convert();
    expect(transform.celsiusToFahrenheit(5)).toBe(41);
});
test("Celcius to Kelvin", () => {
    const transform = new Convert();
    expect(transform.celsiusToKelvin(5)).toBe(278.15);
});
test("Celcius to Reamur", () => {
    const transform = new Convert();
    expect(transform.celsiusToReamur(5)).toBe(4);
});

// Unit Test untuk Konversi Suhu dari Kelvin ke Fahreinhet, Celsius, dan Reamur
test("Kelvin to Fahrenheit", () => {
    const transform = new Convert();
    expect(parseFloat(transform.kelvinToFahrenheit(5).toFixed(2))).toBe(
        -450.67
    );
});
test("Kelvin to Celcius", () => {
    const transform = new Convert();
    expect(transform.kelvinToCelsius(5)).toBe(-268.15);
});
test("Kelvin to Reamur", () => {
    const transform = new Convert();
    expect(parseFloat(transform.kelvinToReamur(5).toFixed(2))).toBe(-214.52);
});

// Unit Test untuk Konversi Suhu dari Reamur ke Fahreinhet, Celsius, dan Kelvin
test("Reamur to Fahrenheit", () => {
    const transform = new Convert();
    expect(transform.reamurToFahrenheit(5)).toBe(43.25);
});
test("Reamur to Celcius", () => {
    const transform = new Convert();
    expect(transform.reamurToCelsius(5)).toBe(6.25);
});
test("Reamur to Kelvin", () => {
    const transform = new Convert();
    expect(transform.reamurToKelvin(5)).toBe(279.4);
});

// Untuk Testingnya saya lakukan hanya pada rumus konversi suhunya.
// Nama : Prawito
// Kelas : Front End Kelas C IT Perbankan Kominfo
