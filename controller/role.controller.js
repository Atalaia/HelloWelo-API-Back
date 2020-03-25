const Role = require('../models/').Role;

exports.role_list = (req,res,next)=>{
    Role.findAll({})
    .then(roles => {
        res.json(roles);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Roles Found'});
    })
}

exports.role_detail = (req,res,next)=>{
    const id = req.params.id
    Role.findByPk(id)
    .then(role => {
        res.json(role);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Role Found'});
    })
}

exports.role_add = (req,res,next) => {
    Role.create(req.body)
    .then(role => {
        res.json(role);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.role_edit = (req,res,next) => {
    const id = req.params.id;
    Role.update(req.body, {
        where: {
          id: id
        }
    })
    .then(role => {
        res.json(role);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.role_delete = (req,res,next) => {
    const id = req.params.id;
    Role.destroy({
        where: {
          id: id
        }
    })
    .then(role => {
        res.status(200);
        res.json({message: "Role deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}