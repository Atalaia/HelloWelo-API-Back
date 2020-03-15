const express = require('express');
const router = express.Router();
const bikeride_controller = require('../controller/bikeride.controller');

router.get('/', bikeride_controller.bikeride_list);
router.get('/:id', bikeride_controller.bikeride_detail);
router.post('/', bikeride_controller.bikeride_add);
router.put('/:id', bikeride_controller.bikeride_edit);
router.delete('/:id', bikeride_controller.bikeride_delete);

module.exports = router;
