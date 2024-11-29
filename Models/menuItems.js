const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        require: true,
        type: String,
        trim: true,
    },
    category: {
        require: true,
        type: String, //Beverage: Coffee, Tea, Juice, Smoothies //Appetizer: Salads, Nachos, Fries //Main Course: Burgers, Pasta, Pizza //Dessert: Cake, Ice Cream, Pastries //Snack: Sandwiches, Wraps, Cookies
        trim: true,
    },
    price: {
        require: true,
        type: Number,
        trim: true,
    },
    isAvailable: {
        require: true,
        type: Boolean,
        default: true,
    }

})

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu
