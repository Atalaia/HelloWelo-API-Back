'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    isActive: DataTypes.BOOLEAN
  }, {});
  UserRole.associate = function(models) {
    // associations can be defined here
    UserRole.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    }),
    UserRole.belongsTo(models.Role, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return UserRole;
};