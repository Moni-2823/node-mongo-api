// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
    if(err) {
       return console.log('unable to connect to mongodb');
    }

    console.log('sucessfully connected to mongodb');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('605307a9c70c40f33ebc64ee')   
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false,
    //     useUnifiedTopology: true 
    // }).then((result) => {
    //     console.log(result);
    // }).catch ((err) => {
    //     console.log(err)
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('60530df2c70c40f33ebc65c9')
    },{
        $set: {
            name: 'shivansi'
        },
        $inc: {
            age: 1
        }
    },{
        useUnifiedTopology: true
    }).then((result) => {
        console.log(result);
    }).catch ((err) => {
        console.log(err)
    });

    client.close();
});