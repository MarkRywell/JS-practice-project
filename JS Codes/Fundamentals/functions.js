function displayData(name1, name2) {
    if(name1 != undefined && name2 != undefined) {
        console.log(`${name1} : ${name2}`);
    }
    else if(name2 == undefined) {
        console.log(name1);
    }
}

displayData("Mark", "Rywell")

