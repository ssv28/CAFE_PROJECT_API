let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let paymentSchema = new Schema ({
    order : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Order',
        required : true
    },
    amountPaid : {
        type : Number,
        required : true
    },
    paymentMethod : {
        type : String,
        enum : ['creditcard', 'online', 'cash'],
        required : true
    },
    paymentDate : {
        type : Date,
        default : Date.now
    }
})

let Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment