const reverseString = (str) => {
  return str.split('').reverse().join('');
}

const reversed = reverseString('Jeff');
console.log(reversed);

module.exports = reverseString;