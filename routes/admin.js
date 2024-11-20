var express = require('express');
var router = express.Router();
var ADMINCONTROLLER = require('../Controller/Admin')


router.post('/signup', ADMINCONTROLLER.adminSignup);
router.post('/login', ADMINCONTROLLER.adminLogin);
router.get('/find', ADMINCONTROLLER.Sequre, ADMINCONTROLLER.adminFind);
router.patch('/update/:id', ADMINCONTROLLER.Sequre, ADMINCONTROLLER.adminUpdate);
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, ADMINCONTROLLER.adminDelete);

module.exports = router;
