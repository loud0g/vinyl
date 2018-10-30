var path = require('path');
var express = require('express');
var router = express.Router();
var csv = require("csvtojson");
var csvFilePath = path.join(__dirname, '../data/collection.csv');

router.get('/', function (req, res) {
    csv()
        .fromFile(csvFilePath)
        .then(function (jsonObj) {
            res.json(jsonObj);
        });
});

module.exports = router;