let mongoose = require('mongoose')
let Schema = mongoose.Schema

const reviewSchema = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        require: true,
        trim: true
    },

    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        require: true,
        trim: true
    },

    rating: {
        type: Number,
        max: 5,
        min: 0,
        require: true
    },

    rating: {
        type: Number,
        max: 5,
        min: 0,
        require: true
    },

    comment: {
        type: String,
        require: true
    },
    
    date: {
        type: Date,
        default: Date.now
    },
})

let Review = mongoose.model('Review', reviewSchema)
module.exports = Review
