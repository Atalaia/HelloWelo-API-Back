const City = require('../models/').City;

exports.city_list = (req,res,next)=>{
    City.findAll({})
    .then(cities => {
        res.json(cities);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No cities found'});
    })
}

exports.city_detail = (req,res,next)=>{
    const id = req.params.id
    City.findByPk(id)
    .then(city => {
        res.json(city);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No city found'});
    })
}

exports.city_add = (req,res,next) => {
    City.create(req.body)
    .then(city => {
        res.json(city);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.city_edit = (req,res,next) => {
    const id = req.params.id;
    City.update(req.body, {
        where: {
          id: id
        }
    })
    .then(city => {
        res.json(city);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.city_delete = (req,res,next) => {
    const id = req.params.id;
    City.destroy({
        where: {
          id: id
        }
    })
    .then(city => {
        res.status(200);
        res.json({message: "City deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


