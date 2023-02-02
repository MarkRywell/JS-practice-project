let displayText = document.getElementById("output1");
userData = document.getElementById("name").value;

document.getElementById("myButton").onclick = function() {
    
    console.log(userData);
    displayText.innerHTML = "Hello " + userData;

    console.log(displayText.innerText);
}