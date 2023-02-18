/*Create a function that takes an array of strings
 and returns an array with only the strings that have
  numbers in them. If there are no strings containing numbers,
   return an empty array. */

function numInStr(arr) {

    const splits = [];
    const numbers = [];

    for(let data of arr) {
        splits.push(data.split(""))
    }

    for(let data of splits) {

        if(data.length > 1) {
            for(let element of data) {
                if(!isNaN(Number(element)) && element != " "){
                    numbers.push(data.join(""));
                    break;
                }
            }
        }
        else {
            if(!isNaN(Number(data[0]))){
                numbers.push(data[0]);
            }
        }
    }

    return numbers;
}

console.log(numInStr(["1a", "a", "2b", "b", "3"]));
console.log(numInStr(["this is a test", "test1"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));



