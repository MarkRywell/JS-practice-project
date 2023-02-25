const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://markgaje:markgaje43@mern.w3pazz9.mongodb.net/?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
    dbConnect: async (callBack) => {
        let client = await MongoClient.connect(uri);
        if(client) {
            dbConnection = client.db();
            return callBack();
        }
        else {
            console.log(client);
            return callBack(client);
        }
    },
    getDb: () => dbConnection
}