'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.City, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    }),
    User.hasMany(models.Participant);
    User.hasMany(models.Comment);
    User.hasMany(models.UserRole);
  };
  return User;
};