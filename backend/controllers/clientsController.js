var ClientsModel = require('../models/clientsModel.js');

/**
 * clientsController.js
 *
 * @description :: Server-side logic for managing clientss.
 */
module.exports = {

    /**
     * clientsController.list()
     */
    list: function (req, res) {
        ClientsModel.find(function (err, clientss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clients.',
                    error: err
                });
            }

            return res.json(clientss);
        });
    },

    /**
     * clientsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ClientsModel.findOne({_id: id}, function (err, clients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clients.',
                    error: err
                });
            }

            if (!clients) {
                return res.status(404).json({
                    message: 'No such clients'
                });
            }

            return res.json(clients);
        });
    },

    /**
     * clientsController.create()
     */
    create: function (req, res) {
        var clients = new ClientsModel({
			reservationID : req.body.reservationID,
			clientID : req.body.clientID,
			date : req.body.date,
			hotelName : req.body.hotelName,
			price : req.body.price,
			balance : req.body.balance
        });

        clients.save(function (err, clients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating clients',
                    error: err
                });
            }

            return res.status(201).json(clients);
        });
    },

    /**
     * clientsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ClientsModel.findOne({_id: id}, function (err, clients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clients',
                    error: err
                });
            }

            if (!clients) {
                return res.status(404).json({
                    message: 'No such clients'
                });
            }

            clients.reservationID = req.body.reservationID ? req.body.reservationID : clients.reservationID;
			clients.clientID = req.body.clientID ? req.body.clientID : clients.clientID;
			clients.date = req.body.date ? req.body.date : clients.date;
			clients.hotelName = req.body.hotelName ? req.body.hotelName : clients.hotelName;
			clients.price = req.body.price ? req.body.price : clients.price;
			clients.balance = req.body.balance ? req.body.balance : clients.balance;
			
            clients.save(function (err, clients) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating clients.',
                        error: err
                    });
                }

                return res.json(clients);
            });
        });
    },

    /**
     * clientsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ClientsModel.findByIdAndRemove(id, function (err, clients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the clients.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
