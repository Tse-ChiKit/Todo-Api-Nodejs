const {MongoClient, ObjectID} = require('mongodb');

console.log(ObjectID);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    db.collection('Todos').find({
        _id: new ObjectID('5b10c54881c9432579da3a77')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch todos', err);
    });

});



// var objid = new ObjectID(12);

// console.log(objid);
// console.log('----')
// console.log(objid.toHexString());