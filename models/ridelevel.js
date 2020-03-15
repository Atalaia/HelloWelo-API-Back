'use strict';
module.exports = (sequelize, DataTypes) => {
  const RideLevel = sequelize.define('RideLevel', {
    name: DataTypes.STRING
  }, {});
  RideLevel.associate = function(models) {
    // associations can be defined here
    RideLevel.hasMany(models.BikeRide);
  };
  return RideLevel;
};