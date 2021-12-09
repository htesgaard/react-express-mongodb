var express = require('express');
var router = express.Router();
var clientsController = require('../controllers/clientsController.js');

/*
 * GET
 */
router.get('/', clientsController.list);

/*
 * GET
 */
router.get('/:id', clientsController.show);

/*
 * POST
 */
router.post('/', clientsController.create);

/*
 * PUT
 */
router.put('/:id', clientsController.update);

/*
 * DELETE
 */
router.delete('/:id', clientsController.remove);

module.exports = router;
