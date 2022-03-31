
const stringLength = (inputText) => {
  if(inputText.lenth < 1 || inputText.length > 10) {
    throw "Length Error";
  }
  return inputText.length;
}

module.exports = stringLength;