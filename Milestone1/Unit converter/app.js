const unitConverter = (celcius) => {
  let fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
};

let temp = unitConverter(26);

console.log(temp);
