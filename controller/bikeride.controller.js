const BikeRide = require('../models/').BikeRide;

exports.bikeride_list = (req,res,next)=>{
    BikeRide.findAll({})
    .then(bikerides => {
        res.json(bikerides);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

exports.bikeride_detail = (req,res,next)=>{
    const id = req.params.id
    BikeRide.findByPk(id)
    .then(bikeride => {
        res.json(bikeride);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

exports.bikeride_add = (req,res,next) => {
    BikeRide.create(req.body)
    .then(bikeride => {
        res.json(bikeride);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.bikeride_edit = (req,res,next) => {
    const id = req.params.id;
    BikeRide.update(req.body, {
        where: {
          id: id
        }
    })
    .then(bikeride => {
        res.json(bikeride);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.bikeride_delete = (req,res,next) => {
    const id = req.params.id;
    BikeRide.destroy({
        where: {
          id: id
        }
    })
    .then(bikeride => {
        res.status(200);
        res.json({message: "BikeRide deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


