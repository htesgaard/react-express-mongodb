/**
 * Created by Syed Afzal
 */
const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
    clientID : {
        type: Number,
        unique: true,
        required: true
    },
    firstName : {
        type: String,
        trim: true,
        required: true
    },
    lastName : {
        type: String,
        trim: true,
        required: true
    },
    streetName : {
        type: String,
        trim: true,
        required: true
    },
    city : {
        type: String,
        trim: true,
        required: true
    }

});

module.exports = {Client};
