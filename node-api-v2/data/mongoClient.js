const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://demo:zdy0K2YXquSqgX6s@cluster0.xwdsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// zdy0K2YXquSqgX6s
// mongodb+srv://demo:zdy0K2YXquSqgX6s@cluster0.xwdsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
let client;
async function connectDb() {
    try  {
        client = await MongoClient.connect(url);
    } catch(e) {
        console.error(e);
    }
}

async function getConnection() {
    return client;
}


module.exports = { connectDb, getConnection };

//
// var cursor = db.collection('Employee').find();
//
// cursor.each(function(err, doc) {
//
//     console.log(doc);
//
// });