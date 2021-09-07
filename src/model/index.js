const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.levels = require('../level/model')(sequelize, Sequelize);
db.groups = require('../groups/model')(sequelize, Sequelize);
db.payments = require('../payments/model')(sequelize, Sequelize);
db.oqituvchilar = require('../oqituvchilar/model')(sequelize, Sequelize);
db.oquvchilar = require('../oquvchilar/model')(sequelize, Sequelize);
db.room = require('../room/model')(sequelize, Sequelize);
db.qabul = require('../qabul/model')(sequelize, Sequelize);

module.exports = db;