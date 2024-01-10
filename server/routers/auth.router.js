
var express = require('express');
var router = express.Router();
<<<<<<< HEAD
// var controller = require('../controllers/auth.controller');

// router.post('/login', controller.login);
// router.post('/register', controller.register);
=======
var controller = require('../controllers/auth.controller');

router.post('/login', controller.login);
router.post('/signup', controller.register);
router.post('/auth',controller.auth);
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11

module.exports = router;