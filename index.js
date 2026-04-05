

function calculateTax(amount) {return amount*0.1};

function convertToUpperCase(text) {return text.toUpperCase()};

function findMaximum(num1, num2) {if (num1>num2){return num1} else {return num2}}

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {let discountedPrice = originalPrice - originalPrice*discountPercentage/100; return discountedPrice}

console.log(findMaximum (4, 5))
console.log(calculateTax (1000))
console.log(convertToUpperCase ("bernard"))
console.log(isPalindrome ("bread"))
console.log(calculateDiscountedPrice(1000, 20))