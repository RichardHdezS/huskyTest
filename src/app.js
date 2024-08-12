function roundNumber (number, decimals = 2) {
  const factor = Math.pow(10, decimals)
  return Math.round(number * factor) / factor
};

function truncNumber (number, decimals = 2) {
  const factor = Math.pow(10, decimals)
  return Math.floor(number * factor) / factor
};

function ceilNumber (number, decimals = 2) {
  const factor = Math.pow(10, decimals)
  return Math.ceil(number * factor) / factor
}

const test1 = 5 * 24.79
console.log('Normal:', test1)
console.log('Round:', roundNumber(test1))
console.log('Trunc:', truncNumber(test1))
console.log('Ceil:', ceilNumber(test1))
