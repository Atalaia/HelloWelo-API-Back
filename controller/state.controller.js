const State = require('../models/').State;

exports.state_list = (req,res,next)=>{
    State.findAll({})
    .then(states => {
        res.json(states);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No states found'});
    })
}

exports.state_detail = (req,res,next)=>{
    const id = req.params.id
    State.findByPk(id)
    .then(state => {
        res.json(state);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No state found'});
    })
}

exports.state_add = (req,res,next) => {
    State.create(req.body)
    .then(state => {
        res.json(state);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.state_edit = (req,res,next) => {
    const id = req.params.id;
    State.update(req.body, {
        where: {
          id: id
        }
    })
    .then(state => {
        res.json(state);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.state_delete = (req,res,next) => {
    const id = req.params.id;
    State.destroy({
        where: {
          id: id
        }
    })
    .then(state => {
        res.status(200);
        res.json({message: "State deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.states_by_country = (req,res,next)=>{
    const id = req.params.id;
    State.findAll({
        where: {
            countryId: id
        }
    })
    .then(statesByCountry => {
        res.json(statesByCountry);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No states found'});
    })
}


