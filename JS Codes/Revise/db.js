const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/ProgVar";

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