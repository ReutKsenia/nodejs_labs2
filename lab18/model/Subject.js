const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('SUBJECT',  {
    SUBJECT: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    SUBJECT_NAME: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PULPIT: {
        type: Sequelize.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        tableName: 'SUBJECT',
        timestamps: false
    }
);