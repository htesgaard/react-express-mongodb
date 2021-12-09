var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clientsSchema = new Schema({
	'reservationID' : Number,
	'clientID' : Number,
	'date' : Date,
	'hotelName' : String,
	'price' : Number,
	'balance' : Number
});

module.exports = mongoose.model('clients', clientsSchema);
