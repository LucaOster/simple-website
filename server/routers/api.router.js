var express = require('express');
var router = express.Router();
//var controller = require('../controller/api.controller');
var ReportController = require('../controllers/report.controller.js');
var Outsite = require('../controllers/outsite.controller.js');
var BidhelpController = require('../controllers/bidhelp.controller.js');
var CalllogController = require('../controllers/calllog.controller.js');

router.get('/outsites' ,Outsite.getdata);
router.post('/outsites' , Outsite.setdata);
router.get('/bidhelp', BidhelpController.getBid);
router.post('/addBid', BidhelpController.addBid);
router.post('/callLog', CalllogController.save);
router.get('/getAllCallLog', CalllogController.getAllCallLog);

module.exports = router;