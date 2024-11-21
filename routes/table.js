let express = require('express');
let router = express.Router();
let TABLECONTROLLER = require('../Controller/Table')
var ADMINCONTROLLER = require("../Controller/Admin")


router.post('/create', ADMINCONTROLLER.Sequre, TABLECONTROLLER.tableCreate);
router.get('/find', ADMINCONTROLLER.Sequre, TABLECONTROLLER.tableFind);
router.patch('/update/:id', ADMINCONTROLLER.Sequre, TABLECONTROLLER.tableUpdate);
router.delete('/delete/:id', ADMINCONTROLLER.Sequre, TABLECONTROLLER.tableDelete);

module.exports = router;
