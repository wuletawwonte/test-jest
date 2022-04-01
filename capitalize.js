const capitalize = (inputText) => {
  return inputText.charAt(0).toUpperCase() + inputText.toLowerCase().slice(1);
}

module.exports = capitalize;