const words = "Programming is fun";

function countVowels(words, callBack) {
    let counter = 0;

    for(let letter of words) {
        
        if(letter.toUpperCase() == letter) {
            let response = callBack(letter.toLowerCase());
            counter += response;
        }
        else {
            let response = callBack(letter.toLowerCase());
            counter += response;
        }
    }

    return counter;
}

console.log(countVowels(words, (letter) => {
    const vowels = ['a','e','i','o','u'];
    for(let vowel of vowels) {
        if(vowel == letter) {
            return 1;
        }
    }
    return 0;
}));
