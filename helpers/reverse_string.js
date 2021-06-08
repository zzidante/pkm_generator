module.exports = function reverseString(str) {
  let size = str.length;
  this.newStr = '';
  while(size--) {
    newStr += str[size];
  }
  return newStr;
};
