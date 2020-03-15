'use strict';
module.exports = (sequelize, DataTypes) => {
  const RideStatus = sequelize.define('RideStatus', {
    value: DataTypes.STRING
  }, {});
  RideStatus.associate = function(models) {
    // associations can be defined here
    RideStatus.hasMany(models.BikeRide);
  };
  return RideStatus;
};