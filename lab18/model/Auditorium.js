const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('AUDITORIUM',  {
    AUDITORIUM: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    AUDITORIUM_NAME: {
        type: Sequelize.STRING,
        allowNull: true
    },
    AUDITORIUM_CAPACITY:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    AUDITORIUM_TYPE: {
        type: Sequelize.STRING,
        allowNull: true
    }},
    {
        freezeTableName: true,
        tableName: 'AUDITORIUM',
        timestamps: false
    } 
);