const BikeRide = require('../models/').BikeRide;
const City = require('../models/').City;

const { Op } = require("sequelize");
const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

exports.bikeride_list = (req, res, next) => {
    BikeRide.findAll({
        where: {
            [Op.and]:
            {
                date: {
                    [Op.gte]: today
                }
            }
        },
        order: [
            ['date', 'ASC'],
            ['time', 'ASC']
        ]
    })
        .then(bikerides => {
            res.json(bikerides);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No BikeRides found' });
        })
}

exports.bikeride_detail = (req, res, next) => {
    const id = req.params.id
    BikeRide.findByPk(id)
        .then(bikeride => {
            res.json(bikeride);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No BikeRide found' });
        })
}

exports.bikeride_add = (req, res, next) => {
    BikeRide.create(req.body)
        .then(bikeride => {
            res.json(bikeride);
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.bikeride_edit = (req, res, next) => {
    const id = req.params.id;
    BikeRide.update(req.body, {
        where: {
            id: id
        }
    })
        .then(bikeride => {
            res.json(bikeride);
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.bikeride_delete = (req, res, next) => {
    const id = req.params.id;
    BikeRide.destroy({
        where: {
            id: id
        }
    })
        .then(bikeride => {
            res.status(200);
            res.json({ message: "BikeRide deleted" });
        })
        .catch(error => {
            res.status(400);
            res.json(error);
        })
}

exports.bikerides_by_city = (req, res, next) => {
    const id = req.params.id;
    BikeRide.findAll({
        where: {
            [Op.and]: [
                {
                    cityId: id
                },
                {
                    date: {
                        [Op.gte]: today
                    }
                }
            ]
        },
        order: [
            ['date', 'ASC'],
            ['time', 'ASC']
        ]
    })
        .then(bikeridesByCity => {
            res.json(bikeridesByCity);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found in this city' });
        })
}

exports.bikerides_by_state = (req, res, next) => {
    const id = req.params.id;
    BikeRide.findAll({
        where: {
            date: {
                [Op.gte]: today
            }
        },
        order: [
            ['date', 'ASC'],
            ['time', 'ASC']
        ],
        include: [
            {
                model: City,
                where: {
                    [Op.and]:
                    {
                        stateId: {
                            [Op.eq]: id
                        }
                    }
                }
            }
        ]
    })
        .then(bikeridesByState => {
            res.json(bikeridesByState);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found in this state' });
        })
}

exports.bikerides_by_country = (req, res, next) => {
    const id = req.params.id;
    BikeRide.findAll({
        where: {
            date: {
                [Op.gte]: today
            }
        },
        order: [
            ['date', 'ASC'],
            ['time', 'ASC']
        ],
        include: [
            {
                model: City,
                where: {
                    [Op.and]:
                    {
                        countryId: {
                            [Op.eq]: id
                        }
                    }
                }
            }
        ]
    })
        .then(bikeridesByCountry => {
            res.json(bikeridesByCountry);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found in this country' });
        })
}

exports.bikerides_by_date = (req, res, next) => {
    const date = req.params.date;
    BikeRide.findAll({
        where: {
            [Op.and]: [
                {
                    date: date
                },
                {
                    date: {
                        [Op.gte]: today
                    }
                }
            ]
        },
        order: [
            ['date', 'ASC'],
            ['time', 'ASC']
        ]
    })
        .then(bikeridesByDate => {
            res.json(bikeridesByDate);
        })
        .catch(error => {
            res.status(400);
            res.json({ message: 'No bike rides found on this date' });
        })
}