const Comment = require('../models/').Comment;

exports.comment_list = (req,res,next)=>{
    Comment.findAll({})
    .then(comments => {
        res.json(comments);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Comments found'});
    })
}

exports.comment_detail = (req,res,next)=>{
    const id = req.params.id
    Comment.findByPk(id)
    .then(comment => {
        res.json(comment);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Comment found'});
    })
}

exports.comment_add = (req,res,next) => {
    Comment.create(req.body)
    .then(comment => {
        res.json(comment);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.comment_edit = (req,res,next) => {
    const id = req.params.id;
    Comment.update(req.body, {
        where: {
          id: id
        }
    })
    .then(comment => {
        res.json(comment);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.comment_delete = (req,res,next) => {
    const id = req.params.id;
    Comment.destroy({
        where: {
          id: id
        }
    })
    .then(comment => {
        res.status(200);
        res.json({message: "Comment deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


