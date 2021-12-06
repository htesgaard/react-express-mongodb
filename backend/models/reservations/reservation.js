/**
 * Created by Syed Afzal
 */
const mongoose = require('mongoose');

const Resrevation = mongoose.model('Reservation', {
    ReservationID : {
        type: Number,
        unique: true,
        required: true
    },
    clientID : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    hotelName : {
        type: String,
        trim: true,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    balance : {
        type: Number,
        required: true
    }


});

module.exports = {Reservation};
