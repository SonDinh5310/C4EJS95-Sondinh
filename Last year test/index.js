let arr = [8, 16, 32, 72, 96];
console.log(arr);

const check = (input) => {
  if (input < 4) {
    return 0;
  }
  let temp;
  for (let i = 2; i < input; i++) {
    temp = Math.log10(1.0 * input) / Math.log10(1.0 * i);
    if (temp === parseInt(temp) && temp > 1) {
      return 1;
    }
  }
  return 0;
};

for (let i = 0; i < arr.length; i++) {
  if (check(arr[i]) === 1) {
    console.log(arr[i]);
  }
}

function add(number1, number2) {
  if (typeof number1 !== "number") {
    return undefined;
  }
  if (arguments.length >= 2) {
    if (typeof number2 !== "number") {
      return undefined;
    }
    return number1 + number2;
  }
  return (number2) => {
    if (typeof number2 !== "number") {
      return undefined;
    }
    return number1 + number2;
  };
}

console.log(add("2", "3"));
