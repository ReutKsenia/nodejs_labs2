const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('PULPIT',  {
    PULPIT: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    PULPIT_NAME: {
        type: Sequelize.STRING,
        allowNull: true
    },
    FACULTY: {
        type: Sequelize.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        tableName: 'PULPIT',
        timestamps: false
    }
);