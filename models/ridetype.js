'use strict';
module.exports = (sequelize, DataTypes) => {
  const RideType = sequelize.define('RideType', {
    name: DataTypes.STRING,
    photoURL: DataTypes.STRING
  }, {});
  RideType.associate = function(models) {
    // associations can be defined here
    RideType.hasMany(models.BikeRide);
  };
  return RideType;
};