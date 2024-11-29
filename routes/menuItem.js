let express = require('express');
let router = express.Router();

let MENUCONTROLLER = require('../Controller/MenuItem')
let ADMINCONTROLLER = require('../Controller/Admin')

router.post('/add', ADMINCONTROLLER.Sequre, MENUCONTROLLER.menuAdd)
router.get('/all',ADMINCONTROLLER.Sequre, MENUCONTROLLER.menuFound)
router.delete('/delete/:id',ADMINCONTROLLER.Sequre, MENUCONTROLLER.menuDelete)
router.patch('/update/:id',ADMINCONTROLLER.Sequre, MENUCONTROLLER.manuUpdate)

module.exports = router;
