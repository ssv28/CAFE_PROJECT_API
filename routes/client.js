let express = require('express');
let router = express.Router();
let ADMINCONTROLLER = require('../Controller/Admin')
let CLIENTCONTROLLER = require('../Controller/Client')

router.post('/signup', ADMINCONTROLLER.Sequre, CLIENTCONTROLLER.ClientSignup);
router.post('/login', ADMINCONTROLLER.Sequre, CLIENTCONTROLLER.ClientLogin);
router.get('/find', ADMINCONTROLLER.Sequre, CLIENTCONTROLLER.ClientFind);
router.patch('/update/:id', ADMINCONTROLLER.Sequre, CLIENTCONTROLLER.ClientUpdate);
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, CLIENTCONTROLLER.ClientDelete);

module.exports = router;
