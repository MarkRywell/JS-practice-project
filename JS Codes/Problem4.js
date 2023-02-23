function evaluate(number) {
    return number % 2 == 0 ? "Evenish" : "Oddish";
}

function oddishOrEvenish(numbers, callBack) {
    const numberList = numbers.toString().split('');
    const newNumbers = [];
    let result = 0;

    for(let number of numberList) {
        newNumbers.push(Number(number));
    }

    for(let number of newNumbers) {
        result += number;
    }
    
    return evaluate(result);
}

console.log(oddishOrEvenish(4433));