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
			clientID : req.body.clientID,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			streetAddress : req.body.streetAddress,
			city : req.body.city
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

            clients.clientID = req.body.clientID ? req.body.clientID : clients.clientID;
			clients.firstName = req.body.firstName ? req.body.firstName : clients.firstName;
			clients.lastName = req.body.lastName ? req.body.lastName : clients.lastName;
			clients.streetAddress = req.body.streetAddress ? req.body.streetAddress : clients.streetAddress;
			clients.city = req.body.city ? req.body.city : clients.city;
			
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
