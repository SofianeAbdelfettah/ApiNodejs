// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     age: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return User;
// };

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    age:{
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'UserId',
      as: 'Posts',
    });
  };
  return User;
};
