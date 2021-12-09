var express = require('express');
var router = express.Router();
var reservationsController = require('../controllers/reservationsController.js');

/*
 * GET
 */
router.get('/', reservationsController.list);

/*
 * GET
 */
router.get('/:id', reservationsController.show);

/*
 * POST
 */
router.post('/', reservationsController.create);

/*
 * PUT
 */
router.put('/:id', reservationsController.update);

/*
 * DELETE
 */
router.delete('/:id', reservationsController.remove);

module.exports = router;
