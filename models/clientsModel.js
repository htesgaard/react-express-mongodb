var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clientsSchema = new Schema({
	'clientID' : Number,
	'firstName' : String,
	'lastName' : String,
	'streetAddress' : String,
	'city' : String
});

module.exports = mongoose.model('clients', clientsSchema);
