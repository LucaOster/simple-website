var express = require('express');
var router = express.Router();
//var controller = require('../controller/api.controller');
var ReportController = require('../controllers/report.controller.js');
var Outsite = require('../controllers/outsite.controller.js');

router.get('/outsites' ,Outsite.getdata);
router.post('/outsites' , Outsite.setdata);
module.exports = router;