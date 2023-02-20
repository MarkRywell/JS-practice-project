const axiosRequest = require('axios');

// axiosRequest
    // .get("https://jsonplaceholder.typicode.com/users")
    // .then(response => {
        // console.log(response.data);
    // })
    // .catch(error=> {
        // console.log(error);   
    // });
// 

async function getUsers(url) {
    try {
        let response = await axiosRequest.get(url);
        console.log(response.status);
        console.log(response.data);
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

// getUsers("https://jsonplaceholder.typicode.com/users");

getUsers("place.json");