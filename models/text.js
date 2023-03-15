const {Model} = require('sequelize');


module.exports = (sequelize , DataTypes)=> { 
class Text extends Model {}
Text.init({
  id:{
      type :  DataTypes.INTEGER,
      primaryKey: true,
  },
  word: DataTypes.STRING
}, {
  sequelize,
  modelName: 'text',
});
return Text;
};