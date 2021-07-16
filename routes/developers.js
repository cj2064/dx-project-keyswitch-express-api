var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');

let developers = [
  { id:1, firstName: "Jason", lastName: "Monroe", favoriteLanguage:"JavaScript", yearStarted: 1999},
  { id:2, firstName: "Bill", lastName: "Gates", favoriteLanguage:"BASIC", yearStarted: 1960}
];

/* GET developers listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(developers));
});

router.post('/developer', function(req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let favoriteLanguage = req.body.favoriteLanguage;
  let yearStarted = req.body.yearStarted;
  let id = developers.length+1;
  developers.push({id:id, firstName:firstName, lastName:lastName, favoriteLanguage:favoriteLanguage,yearStarted:yearStarted});
  res.send("posted successfully");
});

module.exports = router;
