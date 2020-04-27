'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'UserRole'
    });
    Role.hasMany(models.UserRole);
  };
  return Role;
};