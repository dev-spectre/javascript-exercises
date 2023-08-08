const palindromes = function (string) {
  const ALPHANUMERICS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ1234567890";
  const alphaString = string
                        .toLowerCase()
                        .split("")
                        .filter((char) => ALPHANUMERICS.includes(char))
                        .join("");
  return alphaString === alphaString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
