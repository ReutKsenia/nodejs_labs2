const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('AUDITORIUM_TYPE',  {
    AUDITORIUM_TYPE: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    AUDITORIUM_TYPENAME: {
        type: Sequelize.STRING,
        allowNull: true
    }},
    {
        freezeTableName: true,
        tableName: 'AUDITORIUM_TYPE',
        timestamps: false
    } 
);