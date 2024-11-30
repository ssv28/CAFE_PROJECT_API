let express = require("express");
let router = express.Router();

let PAYMENTCONTROLLER = require('../Controller/Payment');
let ADMINCONTROLLER = require('../Controller/Admin');

router.post('/create', ADMINCONTROLLER.Sequre, PAYMENTCONTROLLER.createPayment);

module.exports = router;
