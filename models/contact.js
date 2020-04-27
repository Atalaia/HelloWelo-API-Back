'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    username: DataTypes.STRING,
    usermail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    message: DataTypes.TEXT
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};