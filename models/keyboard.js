// const getDb = require('../routes/keyboards').getDb;

// class Keyboard {
//     constructor(id, name, price, keyswitches , description) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.keyswitches = keyswitches;
//         this.description = description;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('keyboards')
//         .insertOne(this)
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
// }

// module.exports = Keyboard;