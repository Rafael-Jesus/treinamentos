const Sequelize = require('sequelize');
const db = require('./db');

const Users = db.define('users', {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
    },
    setor: {
        type: Sequelize.STRING
    },
    login: {
        type: Sequelize.STRING 
    },
    senha: {
        type: Sequelize.STRING
    },
    file: {
        type: Sequelize.STRING
    },
});

//Criar a tabela
// Users.sync();

module.exports = Users;