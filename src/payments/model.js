module.exports = (sequelize, Sequelize) =>{
    const ModelPayments = sequelize.define(
      "payments",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        pupil_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        payment: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          }
      },
      {
        tableName: "payments",
        timestamps: false
      }
    );
    return ModelPayments;
  };
