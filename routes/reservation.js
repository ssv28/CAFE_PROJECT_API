let express = require('express');
let router = express.Router();
let RESERVATIONCONTROLLER = require('../Controller/Reservation')
var ADMINCONTROLLER = require("../Controller/Admin")


router.post('/create', ADMINCONTROLLER.Sequre, RESERVATIONCONTROLLER.ReservationCreate);
router.get('/find', ADMINCONTROLLER.Sequre, RESERVATIONCONTROLLER.ReservationFind);
router.patch('/update/:id', ADMINCONTROLLER.Sequre, RESERVATIONCONTROLLER.ReservationUpdate);
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, RESERVATIONCONTROLLER.ReservationDelete);

module.exports = router;
