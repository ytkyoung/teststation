function tempConversion(celsius) {
  const fahrenheit = +((celsius * 9) / 5 + 32).toFixed(2);
  const kelvin = +(celsius + 273.15).toFixed(2);

  if (kelvin < 0) {
    return 'Invalid';
  }

  return [fahrenheit, kelvin];
}

const result = tempConversion(0);
console.log(result);
