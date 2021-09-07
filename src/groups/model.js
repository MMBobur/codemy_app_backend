module.exports = (sequelize, Sequelize) =>{
    const ModelGroups = sequelize.define(
      "groups",
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
        time: {
            type: Sequelize.STRING,
            allowNull : false
        },
        days: {
            type: Sequelize.STRING,
            allowNull : false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          }
      },
      {
        tableName: "groups",
        timestamps: false
      }
    );
    return ModelGroups;
  };
