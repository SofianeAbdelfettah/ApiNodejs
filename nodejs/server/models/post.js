// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Post = sequelize.define('Post', {
//     title: DataTypes.STRING,
//     body: DataTypes.STRING,
//     date: DataTypes.DATE,
//     author: DataTypes.STRING
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return Post;
// };

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: DataTypes.DATE,
    author: DataTypes.STRING
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE',
    });
  };
  return Post;
};
