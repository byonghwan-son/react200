var express = require('express')

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}))

router.post('/', (req, res, next) => {
  var type = req.query.type
  if(type === 'list') {
    try {
      var dbConnect_Module = require('./dbconnect_Module')

      req.body.mapper = 'SwToolsMapper';  // mybatis xml 파일명, xml 내의 mapper 네임스페이스
      req.body.crud = 'select'; //select, insert, update, delete
      req.body.mapper_id = 'selectSwToolsList';

      router.use('/', dbConnect_Module);
      
      // 다음 - 동일 미들웨어에 포함된 다음 컨트롤
      // 동일 미들웨어 안에 더 이상 라우터가 없기 때문에 next()라고 해도 다음 라우터로 넘어간다.
      // next()
      
      // 다음 - 동일 미들웨어에 포함된 다음 컨트롤
      // 같은 라우터 미들웨어 스택에 정의된 미들웨어 함수들을 모두 스킵
      // next('route')
      next('route')
    } catch(error) {
      console.log(`Module > dbConnect error : ${error}`)
    }
  }
})

module.exports = router;