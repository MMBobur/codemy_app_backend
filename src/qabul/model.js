module.exports = (sequelize, Sequelize) =>{
    const ModelQabul = sequelize.define(
      "qabul",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        ism: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        familiya: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        yili: {
          type: Sequelize.STRING,
          allowNull: false
        },
        telefon: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        manzili: {
          type: Sequelize.STRING,
          allowNull: false
        },
      },
      {
        tableName: "qabul",
        // timestamps: false
      }
    );
    return ModelQabul;
  };
