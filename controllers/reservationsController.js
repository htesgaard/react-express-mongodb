var ReservationsModel = require('../models/reservationsModel.js');

/**
 * reservationsController.js
 *
 * @description :: Server-side logic for managing reservationss.
 */
module.exports = {

    /**
     * reservationsController.list()
     */
    list: function (req, res) {
        ReservationsModel.find(function (err, reservationss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservations.',
                    error: err
                });
            }

            return res.json(reservationss);
        });
    },

    /**
     * reservationsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReservationsModel.findOne({_id: id}, function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservations.',
                    error: err
                });
            }

            if (!reservations) {
                return res.status(404).json({
                    message: 'No such reservations'
                });
            }

            return res.json(reservations);
        });
    },

    /**
     * reservationsController.create()
     */
    create: function (req, res) {
        var reservations = new ReservationsModel({
			reservationID : req.body.reservationID,
			clientID : req.body.clientID,
			date : req.body.date,
			hotelName : req.body.hotelName,
			price : req.body.price,
			balance : req.body.balance
        });

        reservations.save(function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reservations',
                    error: err
                });
            }

            return res.status(201).json(reservations);
        });
    },

    /**
     * reservationsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReservationsModel.findOne({_id: id}, function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservations',
                    error: err
                });
            }

            if (!reservations) {
                return res.status(404).json({
                    message: 'No such reservations'
                });
            }

            reservations.reservationID = req.body.reservationID ? req.body.reservationID : reservations.reservationID;
			reservations.clientID = req.body.clientID ? req.body.clientID : reservations.clientID;
			reservations.date = req.body.date ? req.body.date : reservations.date;
			reservations.hotelName = req.body.hotelName ? req.body.hotelName : reservations.hotelName;
			reservations.price = req.body.price ? req.body.price : reservations.price;
			reservations.balance = req.body.balance ? req.body.balance : reservations.balance;
			
            reservations.save(function (err, reservations) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reservations.',
                        error: err
                    });
                }

                return res.json(reservations);
            });
        });
    },

    /**
     * reservationsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReservationsModel.findByIdAndRemove(id, function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reservations.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
