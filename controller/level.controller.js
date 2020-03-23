const RideLevel = require('../models/').RideLevel;

exports.level_list = (req,res,next)=>{
    RideLevel.findAll({})
    .then(levels => {
        res.json(levels);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Ride Levels Found'});
    })
}

exports.level_detail = (req,res,next)=>{
    const id = req.params.id
    RideLevel.findByPk(id)
    .then(level => {
        res.json(level);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Ride Level Found'});
    })
}

exports.level_add = (req,res,next) => {
    RideLevel.create(req.body)
    .then(level => {
        res.json(level);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.level_edit = (req,res,next) => {
    const id = req.params.id;
    RideLevel.update(req.body, {
        where: {
          id: id
        }
    })
    .then(level => {
        res.json(level);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.level_delete = (req,res,next) => {
    const id = req.params.id;
    RideLevel.destroy({
        where: {
          id: id
        }
    })
    .then(level => {
        res.status(200);
        res.json({message: "Ride Level deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}