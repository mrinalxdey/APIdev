const {MongoClient} = require('mongodb');
const apikey = require('../uri');

const _uri = apikey;
const dbCon = (coll,cb) => {
    MongoClient.connect(_uri)
    .then(async(client) => {
        const db = client.db('sample_mflix').collection(coll);
        await cb(db);
        client.close();
    })
};



module.exports = dbCon;