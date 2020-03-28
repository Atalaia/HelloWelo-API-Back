const express = require('express');
const router = express.Router();
const city_controller = require('../controller/city.controller');

router.get('/', city_controller.city_list);
router.get('/:id', city_controller.city_detail);
router.post('/', city_controller.city_add);
router.put('/:id', city_controller.city_edit);
router.delete('/:id', city_controller.city_delete);
router.get('/state/:id', city_controller.cities_by_state);

module.exports = router;