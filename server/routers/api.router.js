
var express = require('express');
var router = express.Router();
//var controller = require('../controller/api.controller');
<<<<<<< HEAD
var ReportController = require('../controller/report.controller.js');
=======
var ReportController = require('../controllers/report.controller.js');
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11


// router.get('/all', controller.getAll);
// router.post('/file', controller.postFile);
router.post('/report', ReportController.saveReport);//do you understand?
router.get('/all', ReportController.getAll);

module.exports = router;