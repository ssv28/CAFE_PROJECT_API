const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminData = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Email is Already Use.Please Enter New Email Address."],
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['suparadmin', 'admin', 'manager'],
        default: "admin",
        required: true
    }
});

let ADMIN = mongoose.model('admin', AdminData)
module.exports = ADMIN