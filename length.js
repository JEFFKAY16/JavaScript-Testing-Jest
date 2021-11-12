const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('Condition not met')
  }
};

const fullLength = stringLength('Kayombo');
console.log(fullLength);

module.exports = stringLength;