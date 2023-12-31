var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   database: "react",
//   user: "root",
//   password: "wnallove",
// });

const pool = mysql.createPool({
  connectionLimit: 66,
  waitForConnections: true,
  host: "127.0.0.1",
  port: "3306",
  database: "react",
  user: "root",
  password: "wnallove",
});

router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");
  var param = req.body;

  mybatisMapper.createMapper([`./models/${param.mapper}.xml`]);
  var time = new Date();
  console.log(`## ${time} ##`);
  console.log(`\n Called Mapper Name = ${param.mapper}`);

  var format = { language: "sql", indent: "    " };
  // mysql 쿼리 정보 세팅
  var query = mybatisMapper.getStatement(
    param.mapper,
    param.mapper_id,
    param,
    format
  );
  console.log(`\n========== Node Mybatis Query Log Start ==========`);
  console.log(`* mapper namespace : ${param.mapper}.${param.mapper_id} *\n`);
  console.log(`${query}\n`);

  pool.getConnection(function (err, connection) {
    connection.query(query, function (error, results) {
      if (error) {
        console.log(`db error **************** : ${error}`);
      }
      var time2 = new Date();
      console.log(`## ${time2} ##`);
      console.log("## RESULT DATA LIST ## : \n", results);
      if(results !== undefined) {
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        if (req.body.crud === 'select') {
          res.send({ json });
        } else {
          res.send('succ');
        }
      }
      else {
        res.send('error')
      }
      connection.release();
      console.log(`========== Node Mybatis Query Log End ==========\n`);
    });
  });
});

module.exports = router;
