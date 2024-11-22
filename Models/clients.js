const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /\d{10}/.test(v);
          },
          message: (props) => `${props.value} is not a valid contact number!`,
        },
      },
    password: {
        type: String,
        required: true
    },
   
});

let Client = mongoose.model('Client', clientSchema);
module.exports = Client
