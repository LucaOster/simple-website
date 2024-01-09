
var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth.controller');

router.post('/login', controller.login);
router.post('/signup', controller.register);
router.post('/auth',controller.auth);

module.exports = router;