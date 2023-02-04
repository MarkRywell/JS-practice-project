let userData = document.getElementById("dataDisplay");

document.getElementById("add").onclick = function() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    

    result = parseInt(number1) + parseInt(number2);
    userData.textContent = `Result: ${result}`;
    console.log(result);
}

document.getElementById("subtract").onclick = function() {

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    result = parseInt(number1) - parseInt(number2);
    userData.textContent = `Result: ${result}`;
    console.log(result);
}

document.getElementById("multiply").onclick = function() {

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    result = parseInt(number1) * parseInt(number2);
    userData.textContent = `Result: ${result}`;
    console.log(result);
}

document.getElementById("divide").onclick = function() {

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    result = parseInt(number1) / parseInt(number2);
    userData.textContent = `Result: ${result}`;
    console.log(result);
}






// let displayText = document.getElementById("dataDisplay");
// 
// document.getElementById("myButton").onclick = function() {
    // userData = document.getElementById("dataInput").value;
    // console.log(userData);
    // displayText.innerHTML = "Hello " + userData;
// 
    // console.log(displayText.value);
// }