const express = require('express');
const router = express.Router();
const comment_controller = require('../controller/comment.controller');

router.get('/', comment_controller.comment_list);
router.get('/:id', comment_controller.comment_detail);
router.post('/', comment_controller.comment_add);
router.put('/:id', comment_controller.comment_edit);
router.delete('/:id', comment_controller.comment_delete);

module.exports = router;
