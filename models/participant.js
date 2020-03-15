'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    isOrganiser: DataTypes.BOOLEAN
  }, {});
  Participant.associate = function(models) {
    // associations can be defined here
    Participant.belongsTo(models.BikeRide, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    }),
    Participant.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Participant;
};