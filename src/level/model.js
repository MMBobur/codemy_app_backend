module.exports = (sequelize, Sequelize) =>{
    const ModelLevels = sequelize.define(
      "level",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        deadline: {
          type: Sequelize.STRING,
          allowNull: false
        },
      },
      {
        tableName: "level",
        timestamps: false
      }
    );
    return ModelLevels;
  };
