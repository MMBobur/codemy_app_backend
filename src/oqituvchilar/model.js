module.exports = (sequelize, Sequelize) => {
    const oqituvchilar = sequelize.define(
      "oqituvchilar",
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
        telefon: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          // allowNull: false
        },
        
      },
      {
        tableName: "oqituvchilar",
        // timestamps: false,
      }
    );
    return oqituvchilar;
  };