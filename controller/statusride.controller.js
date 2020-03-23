const RideStatus = require('../models').RideStatus;

exports.statusride_list = (req,res,next)=>{
    RideStatus.findAll({})
    .then(ridestatus => {
        res.json(ridestatus);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Ride Status Found'});
    })
}

exports.statusride_detail = (req,res,next)=>{
    const id = req.params.id
    RideStatus.findByPk(id)
    .then(ridestatus => {
        res.json(ridestatus);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Ride Status Found'});
    })
}

exports.statusride_add = (req,res,next) => {
    RideStatus.create(req.body)
    .then(ridestatus => {
        res.json(ridestatus);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.statusride_edit = (req,res,next) => {
    const id = req.params.id;
    RideStatus.update(req.body, {
        where: {
          id: id
        }
    })
    .then(ridestatus => {
        res.json(ridestatus);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.statusride_delete = (req,res,next) => {
    const id = req.params.id;
    RideStatus.destroy({
        where: {
          id: id
        }
    })
    .then(ridestatus => {
        res.status(200);
        res.json({message: "Ride Status deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}