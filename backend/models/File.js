const Sequelize = require('sequelize');
const db = require('./db');

const File = db.define('files', {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nametreinamento:{
        type: Sequelize.STRING,
    },
    file: {
        type: Sequelize.STRING
    },
    setor: {
        type: Sequelize.STRING
    }
});

//Criar a tabela
// File.sync();

module.exports = File;