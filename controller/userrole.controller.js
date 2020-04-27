const UserRole = require('../models/').UserRole;

exports.userrole_list = (req,res,next)=>{
    UserRole.findAll({})
    .then(userroles => {
        res.json(userroles);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No UserRoles found'});
    })
}

exports.userrole_detail = (req,res,next)=>{
    const id = req.params.id
    UserRole.findByPk(id)
    .then(userrole => {
        res.json(userrole);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No UserRole found'});
    })
}

exports.userrole_add = (req,res,next) => {
    UserRole.create(req.body)
    .then(userrole => {
        res.json(userrole);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.userrole_edit = (req,res,next) => {
    const id = req.params.id;
    UserRole.update(req.body, {
        where: {
          id: id
        }
    })
    .then(userrole => {
        res.json(userrole);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.userrole_delete = (req,res,next) => {
    const id = req.params.id;
    UserRole.destroy({
        where: {
          id: id
        }
    })
    .then(userrole => {
        res.status(200);
        res.json({message: "UserRole deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


