const express = require('express');
const router = express.Router();
const contact_controller = require('../controller/contact.controller');

router.get('/', contact_controller.contact_list);
router.post('/', contact_controller.contact_add);

module.exports = router;