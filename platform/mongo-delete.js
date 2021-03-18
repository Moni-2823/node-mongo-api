// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
    if(err) {
       return console.log('unable to connect to mongodb');
    }

    console.log('sucessfully connected to mongodb');
    const db = client.db('TodoApp');

 
    // delete Many
// db.collection('Todos').deleteMany({text: 'trying to delete'}, { useUnifiedTopology: true }).then((result) => {
//     if (!result.result.n) {
//         return console.log('not fund')
//     }
//     console.log(result.result);
// });

//  deleteOne
// db.collection('Todos').deleteOne({text: 'trying to delete'},{useUnifiedTopology: true}).then((result) => {
//     console.log(result.result);
// });


// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false},{useUnifiedTopology: true}).then((result) => {
//     console.log('deleted item is::::::',result);
// });


// deleting from users document
db.collection('Users').deleteMany({name: 'moni'},{useUnifiedTopology: true});

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("60530debc70c40f33ebc65c5")
}).then((result) => {
    console.log(JSON.stringify(result,undefined,2));
});

    client.close();
});