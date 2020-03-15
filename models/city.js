'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    stateCode: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    flag: DataTypes.INTEGER,
    wikiDataId: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.belongsTo(models.State, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    }),
    City.belongsTo(models.Country, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
    City.hasMany(models.User);
    City.hasMany(models.BikeRide);
  };
  return City;
};