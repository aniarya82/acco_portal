var express = require('express')
var router = express.Router()
var objects = [['obj0', 'obj1'],['obj2', 'obj3']]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Acco Portal', objects })
})

module.exports = router
