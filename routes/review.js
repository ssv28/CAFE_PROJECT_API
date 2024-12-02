let express = require('express')
let router = express.Router()

let ADMINCONTROLLER = require('../Controller/Admin')
let REVIEWCONTROLLER = require('../Controller/Review')

router.post('/create', ADMINCONTROLLER.Sequre, REVIEWCONTROLLER.ReviewCreate)
router.get('/all', ADMINCONTROLLER.Sequre, REVIEWCONTROLLER.allReview)
router.patch('/update/:id', ADMINCONTROLLER.Sequre, REVIEWCONTROLLER.updateReview)
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, REVIEWCONTROLLER.deleteReview)

module.exports = router