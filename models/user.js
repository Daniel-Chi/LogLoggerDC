module.exports = function(sequelize, Sequeilize) {
  var User = sequelize.define("users", {
    username: {
      type: Sequeilize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequeilize.STRING,
      allowNull: false,
      unique: true
    } 
  });

  User.associate = function(models) {
    User.hasMany(models.Stool, {
      onDelete: "cascade"
    });
  };

  return User;
  
};
