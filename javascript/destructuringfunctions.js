const cryptoConverter = (amount) => {
  const crypto = {
    BTC: amount / 19000,
    ETH: amount / 595,
    LTC: amount / 80,
    XEM: amount / 0.2,
  };
  return crypto;
};

//if object or array is returned you can destructure it

const { BTC, ETH, LTC, XEM } = cryptoConverter(1000);

console.log(BTC, ETH);

const calculations = (num) => {
  const calculator = {
    add: num + num,
    subtract: num - num,
    divide: num / num,
    multiply: num * num,
  };
  return calculator;
};

console.log(calculations(5));

const myBill = {
  total: 125,
  tax: 0.0025,
  tip: 0.25,
};

//you can destruct the function argument its taking an object - you can also add default values

const calcBill = ({ total, tax = 0.028, tip }) => {
  return total + bill.tip * total + bill.tax * total;
};

const finalBill = calcBill(myBill);

console.log(finalBill);
