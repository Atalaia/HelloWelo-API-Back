var express = require('express');
var router = express.Router();
const user_controller = require('../controller/user.controller');

router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_detail);
router.post('/signin', user_controller.user_signin);
router.post('/login', user_controller.user_login);
router.put('/edit/:id', user_controller.user_edit);
router.delete('/delete/:id', user_controller.user_delete);

module.exports = router;