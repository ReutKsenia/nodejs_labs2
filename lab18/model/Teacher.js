const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('TEACHER',  {
    TEACHER: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    TEACHER_NAME: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PULPIT: {
        type: Sequelize.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        tableName: 'TEACHER',
        timestamps: false
    }
);