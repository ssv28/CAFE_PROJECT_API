const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    client : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        trim : true,
        ref : 'Client'
    },
    item : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        trim : true,
        ref : 'Menu'
    },
    totalPrice : {
        type : Number,
        require : true,
        trim : true
    },
    quantity : {
        type : Number,
        require : true,
        trim : true
    },
    orderStatus : {
        type : String,
        enum :['pending', 'completed', 'cancled'],
        require : true,
        default : 'pending'
    },
    orderDate : {
        type : Date,
        default: Date.now
    }

})

let Order = mongoose.model('Order', orderSchema)
module.exports = Order