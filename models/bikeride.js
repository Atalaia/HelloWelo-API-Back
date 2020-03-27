'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeRide = sequelize.define('BikeRide', {
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    numberKm: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    meetingPoint: DataTypes.TEXT,
    itinerary: DataTypes.TEXT,
    numberMaxParticipants: DataTypes.INTEGER
  }, {});
  BikeRide.associate = function(models) {
    // associations can be defined here
    BikeRide.belongsTo(models.RideType, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: true
      }
    }),
    BikeRide.belongsTo(models.RideLevel, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    }),
    BikeRide.belongsTo(models.RideStatus, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    }),
    BikeRide.belongsTo(models.City, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    }),
    BikeRide.hasMany(models.Participant);
    BikeRide.hasMany(models.Comment);
  };
  return BikeRide;
};