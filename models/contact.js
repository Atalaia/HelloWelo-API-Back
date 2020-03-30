'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    username: DataTypes.STRING,
    usermail: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};