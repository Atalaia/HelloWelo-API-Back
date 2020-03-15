'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    fipsCode: DataTypes.STRING,
    iso2: DataTypes.STRING,
    flag: DataTypes.INTEGER,
    wikiDataId: DataTypes.STRING
  }, {});
  State.associate = function(models) {
    // associations can be defined here
    State.belongsTo(models.Country, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
    State.hasMany(models.City);
  };
  return State;
};