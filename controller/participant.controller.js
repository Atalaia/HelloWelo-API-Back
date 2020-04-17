const Participant = require('../models/').Participant;
const BikeRide = require('../models/').BikeRide;
const User = require('../models/').User;

const { Op } = require("sequelize");

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

// add a participant into Participant table and increment number of Participants in BikeRides table
exports.participant_add = (req, res, next) => {
    Participant.bulkCreate([req.body]) //Special method about n:m association
        .then(data => {
            BikeRide.increment('numberParticipants', { where: { id: req.body.BikeRideId } })
                .then(data => res.json('update ok'))
                .catch(error => {
                    res.status(400);
                    res.json(error);
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

// delete a participant into Participant table and decrement number of Participants in BikeRides table
exports.participant_delete = (req, res, next) => {
    const bikeRideId = req.params.bikeRideId;
    const userId = req.params.userId;
    
    Participant.destroy({
        where: {
            bikeRideId: bikeRideId,
            userId: userId
        }
    })
        .then(data => {
            BikeRide.decrement('numberParticipants', { where: { id: bikeRideId } })
                .then(data => res.json('Participant deleted'))
                .catch(error => {
                    res.status(400);
                    res.json(error);
                })
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

// getBikeRideById
exports.participants_by_bikeride = (req, res, next) => {
    const id = req.params.id;
    BikeRide.findAll({
        where: { id: id },
        include: {
            model: User,
            through: { attributes: ['isOrganiser'] } // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        }
    })
        .then(user => {
            res.json(user[0]);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No participants found in this bike ride' });
        })
}

// getUserById
exports.bikerides_by_user = (req, res, next) => {
    const id = req.params.id;
    User.findAll({
        where: { id: id },
        include: {
            model: BikeRide,
            through: { attributes: ['isOrganiser'] } // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        }
    })
        .then(bikeride => {
            res.json(bikeride[0]);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found for this user' });
        })
}