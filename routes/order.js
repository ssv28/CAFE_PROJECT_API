let express = require("express")
let router = express.Router()

let ORDERCONTROLLER = require("../Controller/Order")
let ADMINCONTROLLER = require("../Controller/Admin")

router.post('/create', ADMINCONTROLLER.Sequre, ORDERCONTROLLER.orderCreate)
router.get('/all', ADMINCONTROLLER.Sequre, ORDERCONTROLLER.allOrder)
router.patch('/update/:id', ADMINCONTROLLER.Sequre, ORDERCONTROLLER.orderUpdate)
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, ORDERCONTROLLER.orderDelete)

module.exports = router