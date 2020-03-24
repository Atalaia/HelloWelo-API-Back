'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BikeRides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      numberKm: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      meetingPoint: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      itinerary: {
        type: Sequelize.TEXT
      },
      numberMaxParticipants: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rideTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RideTypes',
          key: 'id'
        }
      },
      rideLevelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RideLevels',
          key: 'id'
        }
      },
      rideStatusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RideStatuses',
          key: 'id'
        }
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cities',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BikeRides');
  }
};