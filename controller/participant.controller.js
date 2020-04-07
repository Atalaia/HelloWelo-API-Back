const Participant = require('../models/').Participant;
const BikeRide = require('../models/').BikeRide;
const User = require('../models/').User;

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
        include: [{
            model: BikeRide,
            where: {
                [Op.and]:
                {
                    id: {
                        [Op.eq]: id
                    }
                }
            }
        }]
    })
        .then(participantsByBikeride => {
            BikeRide.findAll({})
                .then(bikeride => {
                    res.json(bikeride);
                })
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No participants found in this bike ride' });
        })
}

exports.bikerides_by_user = (req, res, next) => {
    const id = req.params.id;
    User.findAll({
        where: { id: id },
        include: {
          model: BikeRide,
          through: { attributes: [] } // this will remove the rows from the join table (i.e. 'UserPubCrawl table') in the result set
        }
      })
      .then(bikeride => {
            res.json(bikeride[0]);
        })
        .catch(error=>{
            res.status(400);
            res.json({message : 'il y a rien la'});
        })
}