// async function myFunction() {
    // setTimeout(() => {return "Mark Gaje"}, 3000);
// }
// 
// async function displayName() {
    // await console.log(`${myFunction()} wtf`);
    // console.log("hello");
    // 
// }


const request = new XMLHttpRequest();

const getReq = async (resource, callback) => {
    request.addEventListener('readystatechange', () => {
        if(request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText);
            callback(data);
        }
    });
    request.open('GET', resource);
    request.send();
}

const jsonFiles = ["foods.json", "place.json", "users.json"];


// for(let jsonFile of jsonFiles) {
    // getReq(jsonFile, (data) => {
        // console.log("callback");
        // for(element of data) {
            // console.log(element);
        // }
    // })
    // 
// }

getReq('foods.json', (data) => {
    console.log(data);
    getReq('users.json', (data) => {
        console.log(data);
        getReq('place.json', (data) => {
            console.log(data);
        })
    });
});