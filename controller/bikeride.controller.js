const BikeRide = require('../models/').BikeRide;
const City = require('../models/').City;

exports.bikeride_list = (req,res,next)=>{
    BikeRide.findAll({})
    .then(bikerides => {
        res.json(bikerides);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No BikeRides found'});
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
        res.json({message : 'No BikeRide found'});
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

exports.bikerides_by_city = (req,res,next)=>{
    const id = req.params.id;
    BikeRide.findAll({
        where: {
            cityId: id
        }
    })
    .then(bikeridesByCity => {
        res.json(bikeridesByCity);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No bike rides found in this city'});
    })
}

exports.bikerides_by_state = (req,res,next)=>{
    const id = req.params.id;
    BikeRide.findAll({
        include: [
            {
              model: City,
              where: { stateId: id }
            }
        ]
    })
    .then(bikeridesByState => {
        res.json(bikeridesByState);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No bike rides found in this state'});
    })
}

exports.bikerides_by_date = (req,res,next)=>{
    const date = req.params.date;
    BikeRide.findAll({
        where: {
            date: date
        }
    })
    .then(bikeridesByDate => {
        res.json(bikeridesByDate);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No bike rides found on this date'});
    })
}