const express = require('express');
const router = express.Router();
const participant_controller = require('../controller/participant.controller');

router.get('/', participant_controller.participant_list);
router.get('/:id', participant_controller.participant_detail);
router.post('/', participant_controller.participant_add);
router.put('/:id', participant_controller.participant_edit);
router.delete('/:id', participant_controller.participant_delete);

module.exports = router;