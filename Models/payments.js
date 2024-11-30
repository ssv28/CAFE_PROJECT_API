// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let paymentSchema = new Schema ({
//     order : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : 'Order',
//         require : true
//     },
//     amountPaid : {
//         type : Number,
//         require : true
//     },
//     paymentMethod : {
//         type : String,
//         enum : ['creditcard', 'online', 'cash'],
//         require : true
//     },
//     paymentDate : {
//         type : Date,
//         default : Date.now
//     }
// })

// let Payment = mongoose.model('Payment', paymentSchema)
// module.exports = Payment

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let paymentSchema = new Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true // corrected 'require' to 'required'
  },
  amountPaid: {
    type: Number,
    required: true // corrected 'require' to 'required'
  },
  paymentMethod: {
    type: String,
    enum: ['creditcard', 'online', 'cash'],
    required: true // corrected 'require' to 'required'
  },
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

let Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
