const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    tableNumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['available', 'reserved', 'occupied', 'unavailable'], 
        default: 'available',
    },
    reservation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation",
        required: true
    }
});

let TABLE = mongoose.model('TABLE', tableSchema)
module.exports = TABLE