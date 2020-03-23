const RideType = require('../models/').RideType;

exports.type_list = (req,res,next)=>{
    RideType.findAll({})
    .then(types => {
        res.json(types);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Bike Ride Types found'});
    })
}

exports.type_detail = (req,res,next)=>{
    const id = req.params.id
    RideType.findByPk(id)
    .then(type => {
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Bike Ride Type found'});
    })
}

exports.type_add = (req,res,next) => {
    RideType.create(req.body)
    .then(type => {
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.type_edit = (req,res,next) => {
    const id = req.params.id;
    RideType.update(req.body, {
        where: {
          id: id
        }
    })
    .then(type => {
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.type_delete = (req,res,next) => {
    const id = req.params.id;
    RideType.destroy({
        where: {
          id: id
        }
    })
    .then(type => {
        res.status(200);
        res.json({message: "Type deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}