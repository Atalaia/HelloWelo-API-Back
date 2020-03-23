const Country = require('../models/').Country;

exports.country_list = (req,res,next)=>{
    Country.findAll({})
    .then(countries => {
        res.json(countries);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No countries found'});
    })
}

exports.country_detail = (req,res,next)=>{
    const id = req.params.id
    Country.findByPk(id)
    .then(country => {
        res.json(country);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No country found'});
    })
}

exports.country_add = (req,res,next) => {
    Country.create(req.body)
    .then(country => {
        res.json(country);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.country_edit = (req,res,next) => {
    const id = req.params.id;
    Country.update(req.body, {
        where: {
          id: id
        }
    })
    .then(country => {
        res.json(country);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.country_delete = (req,res,next) => {
    const id = req.params.id;
    Country.destroy({
        where: {
          id: id
        }
    })
    .then(country => {
        res.status(200);
        res.json({message: "Country deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


