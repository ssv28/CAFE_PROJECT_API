let express = require('express')
let router = express.Router()

let ADMINCONTROLLER = require('../Controller/Admin')
let DISCOUNTCONTROLLER = require('../Controller/Discount')

router.post('/create', ADMINCONTROLLER.Sequre, DISCOUNTCONTROLLER.discountCreate)
router.get('/all', ADMINCONTROLLER.Sequre, DISCOUNTCONTROLLER.allDiscount)
router.patch('/update/:id', ADMINCONTROLLER.Sequre, DISCOUNTCONTROLLER.updateDiscount)
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, DISCOUNTCONTROLLER.deleteDiscount)

module.exports = router