const data = ["Mobile", "Programming", "is", "Easy"];
console.log(counting_vowels(data));

function counting_vowels(words) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const splitLetters = [];
    let count = 0;

    for(let word of words) {
        splitLetters.push(word.split(""));
    }

    for(let letters of splitLetters) {
        for(let letter of letters) {
            for(let vowel of vowels) {
                vowel == letter ? count++ : null;
            }
        }
    }

    return count;
}