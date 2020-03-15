'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    iso3: DataTypes.STRING,
    iso2: DataTypes.STRING,
    phonecode: DataTypes.STRING,
    capital: DataTypes.STRING,
    currency: DataTypes.STRING,
    flag: DataTypes.INTEGER,
    wikiDataId: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.City);
    Country.hasMany(models.State);
  };
  return Country;
};