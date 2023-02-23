const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/ProgVar";


let dbConnection;

module.exports = {
    dbConnect: (callBack) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db();
            return callBack();
        })
        .catch((error) => {
            console.log(error);
            return callBack(error);
        })
    },
    getDb: () => dbConnection
};


