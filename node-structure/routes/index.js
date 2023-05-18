var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const mysql_promise = require('mysql2/promise');
const Enum = require('../base/config/Enum');

const errorCode = {
  duplication: 401
}

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo'
});

/* GET home page. */
router.get('/', function (req, res, next) {

  let header = req.headers["Biz-Insight"];
  console.log(header);

  let key = process.env.Key;
  res.send({ Title: "NodeJs is running!", key: key })
});

//# Data by id only
router.get('/apiSelect/:id', function (req, res, next) {
  try {


    let id = req.params.id || 0;
    if (id == 0) {
      return res.send({ error: "Issue related to pera!" });
    }

    let strQuery = " CALL selectProducts('" + id + "')";

    connection.query(strQuery, function (err, results, fields) {
      res.send(results);
    });

  } catch (error) {
    return res.send({ code: 404, error: error.message });
  }

});

router.get('/apiSelectAll', function (req, res, next) {

  let strQuery = " CALL selectProducts(0)";

  connection.query(strQuery, function (err, results, fields) {
    res.send(results);
  });
});

router.post('/apiOperation', async function (req, res, next) {

  try {


    let id = req.body.id || 0;
    let name = req.body.name || '';
    let sku = req.body.sku || '0';
    let price = req.body.price || 0;
    let quantity = req.body.quantity || 0;

    let strQuery = "CALL crud(" + id + ",'" + name + "',  '" + sku + "','" + price + "','" + quantity + "');"

    connection.query(strQuery, function (err, results, fields) {
      if (err) {
        if (err.errno == 1062)
          return res.send({ code: errorCode.duplication, error: err.code });
      }
      res.send(results);
    });

  } catch (error) {
    return res.send({ code: 404, error: error.message });
  }

});

router.delete('/apiRemove/:id', function (req, res, next) {

  let id = req.params.id || 0;
  if (id == 0) {
    return res.send({ error: "Issue related to pera!" });
  }

  let strQuery = "Call deleteRecord('" + id + "')";

  connection.query(strQuery, function (err, results, fields) {
    res.send(results);
  });
});

module.exports = router;
