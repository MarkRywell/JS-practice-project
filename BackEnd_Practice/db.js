const mongoose = require('mongoose');
require('dotenv').config();

let dbConnection;

mongoose.set('strictQuery', false);

module.exports = {
    dbConnect: (callBack) => {
        mongoose.connect(process.env.MONGO_URI)
    
        .then((client) => {
            dbConnection = client.db;
            return callBack();
        })
        .catch((error) => {
            console.log(error);
            return callBack(error);
        });
    },
    getDb: () => dbConnection
}


