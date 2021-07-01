var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
  let developer = { firstname: "Jason", lastname: "Monroe", favoriteLanguage:"JavaScript", yearStarted: 1999}
  res.send(JSON.stringify(developer));
});

router.post('/developer', function(req, res, next) {
  console.log("developer being posted");
});

module.exports = router;
