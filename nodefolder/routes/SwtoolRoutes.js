var express = require('express')

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}))

router.post('/', (req, res, next) => {
  var type = req.query.type
  if(type === 'list') {
    try {
      var dbConnect_Module = require('./dbconnect_Module')

      req.body.mapper = 'SwToolsMapper';  // mybatis xml 파일명
      req.body.crud = 'select'; //select, insert, update, delete
      req.body.mapper_id = 'selectSwToolsList';

      router.use('/', dbConnect_Module);
      next('route')
    } catch(error) {
      console.log(`Module > dbConnect error : ${error}`)
    }
  }
})

module.exports = router;