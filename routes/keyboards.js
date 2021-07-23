var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const client = require('../mongoConfig/databaseConnection');

let keyboards = [
  // { id:1, name: "Ducky One 2 Mini", price: 99.99, keyswitches:"Cherry MX, Kailh, Gateron", description: "The popular 60% keyboard by Ducky", imageUrl: "https://static3.caseking.de/media/image/gata-1134_gata_1134_01.jpg"},
  // { id:2, name: "Logitech G Pro", price: 129.99, keyswitches:"GX Clicky, GX Linear", description: "Logitech's famous keyboard used by pros worldwide", imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/logitech_920_009388_g_pro_mechanical_gaming_keyboard_1512051.jpg"},
  // { id:3, name: "Royal Kludge RK87", price: 59.99, keyswitches:"Outemu Brown", description: "A popular starter mechanical keyboard for those on a budget", imageUrl: "http://cdn.shopify.com/s/files/1/0510/7866/0274/products/87keymechanicalkeyboard_1200x1200.jpg?v=1612180953"}
];

/* GET keyboards from MongoDB */
router.get('/', function(req, res, next) {
  // client connect code snippet from full driver code
  client.connect(err => {
    const collection = client.db("DXproject").collection("keyboards");
    // perform actions on the collection object
      collection.find().toArray((err,keyboards) => {
      res.send(JSON.stringify(keyboards));
      client.close();
    });
  })
  
});
// POST keyboard to MongoDB
router.post('/keyboards', function(req, res, next) {
  let name = req.body.name;
  let price = req.body.price;
  let keyswitches = req.body.keyswitches;
  let description = req.body.description;
  // let id = keyboards.length+1;
  let imageUrl = req.body.imageUrl;

  keyboard = new Keyboard(null, name, price, keyswitches, description, imageUrl);
  router.get('/', function(req, res, next) {
    // client connect code snippet from full driver code
      collection.insertOne(keyboard)
      res.send(JSON.stringify(keyboards));
      client.close();
    })
  keyboards.push({id:id, name:name, price:price, keyswitches:keyswitches, description:description, imageUrl:imageUrl});
  res.send("posted successfully");
});

module.exports = router;
// module.exports = mongoConnect;
// module.exports = getDb;