// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
    if(err) {
       return console.log('unable to connect to mongodb');
    }

    console.log('sucessfully connected to mongodb');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('6052383cc70c40f33ebc512c')}).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('unable to fatch todo',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('unable to fatch todo',err);
    // });


    db.collection('Users').find({name:'anshi'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    });

    // client.close();
});