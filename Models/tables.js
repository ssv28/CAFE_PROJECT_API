const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    tableNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    capacity: {
        type: Number,
        required: true,
        trim: true,
    },
    isOccupied: {
        type: Boolean,
        required: true,
        trim: true,
    },
    reservation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: "reservation"
    }
});

let TABLE = mongoose.model('TABLE', tableSchema)
module.exports = TABLE