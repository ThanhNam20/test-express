var express = require('express');
var router = express.Router();

var userController = require('../controllers/users.controller');

router.get('/', userController.getAllUser);
router.post('/', userController.createUser);
router.post('/delete', userController.deleteUser);

module.exports = router;