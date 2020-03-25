const Participant = require('../models/').Participant;

exports.participant_list = (req,res,next)=>{
    Participant.findAll({})
    .then(participants => {
        res.json(participants);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Participants Found'});
    })
}

exports.participant_detail = (req,res,next)=>{
    const id = req.params.id
    Participant.findByPk(id)
    .then(participant => {
        res.json(participant);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No Participant Found'});
    })
}

exports.participant_add = (req,res,next) => {
    Participant.create(req.body)
    .then(participant => {
        res.json(participant);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.participant_edit = (req,res,next) => {
    const id = req.params.id;
    Participant.update(req.body, {
        where: {
          id: id
        }
    })
    .then(participant => {
        res.json(participant);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.participant_delete = (req,res,next) => {
    const id = req.params.id;
    Participant.destroy({
        where: {
          id: id
        }
    })
    .then(participant => {
        res.status(200);
        res.json({message: "Participant deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}