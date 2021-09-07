module.exports = (sequelize, Sequelize) =>{
    const ModelRoom = sequelize.define(
      "room",
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
        }
      },
      {
        tableName: "room",
        // timestamps: false
      }
    );
    return ModelRoom;
  };
