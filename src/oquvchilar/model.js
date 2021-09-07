module.exports = (sequelize, Sequelize) => {
    const Oquvchilar = sequelize.define("oquvchilar", {
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
        guruh_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    },
        {
            tableName: "oquvchilar",
            timestamps: true
        }

    );
    return Oquvchilar;
};