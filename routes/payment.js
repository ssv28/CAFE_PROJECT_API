let express = require("express");
let router = express.Router();

let PAYMENTCONTROLLER = require('../Controller/Payment');
let ADMINCONTROLLER = require('../Controller/Admin');

router.post('/create', ADMINCONTROLLER.Sequre, PAYMENTCONTROLLER.createPayment);
router.get('/all', ADMINCONTROLLER.Sequre, PAYMENTCONTROLLER.allPayment)
router.patch('/update/:id', ADMINCONTROLLER.Sequre, PAYMENTCONTROLLER.updatePayment)
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, PAYMENTCONTROLLER.deletePayment)

module.exports = router;
