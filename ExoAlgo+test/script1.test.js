const conversion = require('./script1');



test('convertir nombre negatif Celsius en degrés Fahrenheit', () => {
    expect(conversion(-37)).toBe(-34);
});
test('convertir nombre positif Celsius en degrés Fahrenheit', () => {
    expect(conversion(14)).toBe(57);
});
test('convertir 0 Celsius en degrés Fahrenheit', () => {
    expect(conversion(0)).toBe(32);
});
test('convertir chaine de caractère en degrés Fahrenheit', () => {
    expect(conversion("abc")).toBe("Données en entrée non-correctes.");
});