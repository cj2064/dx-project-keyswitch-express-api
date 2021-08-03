// include MongoDB full driver code example here 
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://"+process.env.MONGO_USER_PASS+"@keyswitch.anpao.mongodb.net/DXproject?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = client;
