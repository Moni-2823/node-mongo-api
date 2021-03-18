// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name:'anil',age:60};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
    if(err) {
       return console.log('unable to connect to mongodb');
    }

    console.log('sucessfully connected to mongodb');
    const db = client.db('TodoApp');

    


    // db.collection('Todos').insertOne({
    //     text: 'do something',
    //     completed: false
    //     }, (err , result) => {
    //         if(err) {
    //             return console.log('unable to goto todo', err);
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name: 'moni',
    //     age: 34,
    //     location: 'noida' 
    // }, (err , result) => {
    //     if(err) {
    //         return console.log('error found', err);
    //     }
    //     console.log(result.ops);
    // });

    client.close();
});