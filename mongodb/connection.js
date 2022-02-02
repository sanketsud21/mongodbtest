const MongoClient =require('mongodb').MongoClient

MongoClient.connect('mongodb://admin:password@localhost:27017', function(err, client) {
    if (err) throw err;

        console.log("connection success");
    
        var db ='user-account';
        var query = { _id: 10, item: "box", qty: 20 }
        db.collection('user').update(query, (err, res) => {
            if (err) throw err
            console.log(res)
        })

        
    

})