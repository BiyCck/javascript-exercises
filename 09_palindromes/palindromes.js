const palindromes = function (word) {
    const wordArray = word.toLowerCase().split("").filter(char => char.match(/^[a-z0-9]$/i));
    let pivotIndex = Math.floor(wordArray.length / 2);
    for (let i = 0; i < pivotIndex; i++) {
        if (wordArray[i] !== wordArray[wordArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
