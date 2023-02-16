let word = "hello";

const letters = ['M', 'N', 'P', 'Q', 'R'];
const letters1 = ['m', 'n', 'p', 'q', 'r'];

console.log(missing_letter(letters1));

function missing_letter(letters) {

    let letterValue = [];

    const alphabet = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26,
    };

    let isUpper = false;

    for(let letter of letters) {
        if(letter.toUpperCase() == letter) {
            isUpper = true;
            lowerLetter = letter.toLowerCase();
            letterValue.push(alphabet[lowerLetter]);
            continue;
        }
        letterValue.push(alphabet[letter]);
    }

    let temp = 0;

    Object.prototype.getKey = function(value) {
        for(var key in this) {
            if(this[key] == value) {
                return key;
            }
        }
        return null;
    };

    for(let x = letterValue.length - 1; x >= 0; x--) {
        if(x == letterValue.length - 1) {
            temp = letterValue[x];
            continue;
        }
        temp -= letterValue[x];
        if(temp > 1) {
            if(isUpper) {
                let missing = alphabet.getKey(letterValue[x] + 1);
                return missing.toUpperCase();
            }
            return alphabet.getKey(letterValue[x] + 1);
            
        }
        temp = letterValue[x];
    }

}