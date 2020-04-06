const Participant = require('../models/').Participant;
const BikeRide = require('../models/').BikeRide;

exports.participant_list = (req, res, next) => {
    Participant.findAll({})
        .then(participants => {
            res.json(participants);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No Participants Found' });
        })
}

exports.participant_detail = (req, res, next) => {
    const id = req.params.id;
    Participant.findByPk(id)
        .then(participant => {
            res.json(participant);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No Participant Found' });
        })
}

exports.participant_add = (req, res, next) => {
    const bikeRideId = req.body.bikeRideId;
    Participant.create(req.body)
        .then(participant => {
            BikeRide.findByPk(bikeRideId)
                .then(bikeride => {
                    BikeRide.increment({ numberParticipants: 1, where: { id: bikeride.id } })
                        .then(data => res.json('update ok'));
                })
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.participant_edit = (req, res, next) => {
    const id = req.params.id;
    Participant.update(req.body, {
        where: {
            id: id
        }
    })
        .then(participant => {
            res.json(participant);
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.participant_delete = (req, res, next) => {
    const id = req.params.id;
    Participant.destroy({
        where: {
            id: id
        }
    })
        .then(participant => {
            res.status(200);
            res.json({ message: "Participant deleted" });
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.participants_by_bikeride = (req, res, next) => {
    const id = req.params.id;
    Participant.findAll({
        where: {
            bikeRideId: id
        }
    })
        .then(participantsByBikeride => {
            res.json(participantsByBikeride);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No participants found in this bike ride' });
        })
}

exports.bikerides_by_user = (req, res, next) => {
    const id = req.params.id;
    Participant.findAll({
        where: {
            userId: id
        }
    })
        .then(bikeridesByUser => {
            res.json(bikeridesByUser);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found for this user' });
        })
}