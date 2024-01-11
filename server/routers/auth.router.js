
var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth.controller');

router.post('/login', controller.login);
router.post('/signup', controller.register);
router.post('/role',controller.role);
module.exports = router;