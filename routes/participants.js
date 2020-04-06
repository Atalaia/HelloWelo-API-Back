const express = require('express');
const router = express.Router();
const participant_controller = require('../controller/participant.controller');

router.get('/', participant_controller.participant_list);
router.get('/:id', participant_controller.participant_detail);
router.post('/', participant_controller.participant_add);
router.put('/:id', participant_controller.participant_edit);
router.delete('/:id', participant_controller.participant_delete);
router.get('/bikeride/:id', participant_controller.participants_by_bikeride);
router.get('/user/:id', participant_controller.bikerides_by_user);

module.exports = router;