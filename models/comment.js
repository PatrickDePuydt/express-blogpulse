'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comment.init({
    commentator_name: DataTypes.STRING,
    comment_payload: DataTypes.TEXT,
    article: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};