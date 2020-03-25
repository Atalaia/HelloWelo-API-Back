const express = require('express');
const router = express.Router();
const participant_controller = require('../controller/participant.controller');

router.get('/', participant_controller.participant_list);
router.get('/:id', participant_controller.participant_detail);
router.post('/add', participant_controller.participant_add);
router.put('/edit/:id', participant_controller.participant_edit);
router.delete('/delete/:id', participant_controller.participant_delete);

module.exports = router;