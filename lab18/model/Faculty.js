const Sequelize = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('FACULTY',  {
    FACULTY: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    FACULTY_NAME: {
        type: Sequelize.STRING,
        allowNull: true
    }},
    {
        freezeTableName: true,
        tableName: 'FACULTY',
        timestamps: false
    } 
);