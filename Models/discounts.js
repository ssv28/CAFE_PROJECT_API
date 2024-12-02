let mongoose = require('mongoose')
let Schema = mongoose.Schema

const discountSchema = new Schema({
    offerName: {
        type: String,
        require: true,
        trim: true
    },
    discountPersentage: {
        type: String,
        require: true,
        trim: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },

})

let Discount = mongoose.model('Discount', discountSchema)
module.exports = Discount