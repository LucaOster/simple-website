
var express = require('express');
var router = express.Router();
//var controller = require('../controller/api.controller');
var ReportController = require('../controllers/report.controller.js');


// router.get('/all', controller.getAll);
// router.post('/file', controller.postFile);
router.post('/report', ReportController.saveReport);//do you understand?
router.get('/all', ReportController.getAll);

module.exports = router;