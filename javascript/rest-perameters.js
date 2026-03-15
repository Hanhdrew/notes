//rest operator is the opposite of the spread operator - spread operator unpacks iterable
//rest operator packs iterables

//example function
const currencyConverter = (rate, ...rest) => {
  return rest.map((amount) => rate * amount);
};

const converted = currencyConverter(1.25, 5, 10, 23, 44, 87);

console.log(converted);

//instead of writing arguments for each one you can use ...rest

const teams = ["you", "they", "Andrew", "Jacob", "Jared"];

const [capt, coCapt, ...rest] = teams;

console.log(capt, coCapt, ...rest);
