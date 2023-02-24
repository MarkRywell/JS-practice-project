
function oddOrEven(number, callback) {
    if(number % 2 == 0) {
        return callback(null, "Even");
    }
    else {
        return callback("Odd", null);
    }
}

oddOrEven(7, (odd, even) => {
    if(odd) {
        console.log(odd);
    }
    else {
        console.log(even);
    }
});