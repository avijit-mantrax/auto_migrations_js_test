const {Model} = require('sequelize');
const text = require('./text');


module.exports = (sequelize , DataTypes)=> { 
class User extends Model {}
User.init({
  id:{
      type :  DataTypes.INTEGER,
      primaryKey: true,
  },
  firstName: DataTypes.STRING,
  middleName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  word: DataTypes.STRING
}, {
  sequelize,
  modelName: 'user',
});
User.hasMany(text(sequelize , DataTypes));
return User;
};