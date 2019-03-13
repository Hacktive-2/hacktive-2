const Sequelize = require('sequelize')
const db = require('../db')

const Puzzle = db.define('puzzle', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  prompt: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  solution: {
    type: Sequelize.TEXT
  },
  specs: {
    type: Sequelize.BLOB
  },
  startingText: {
    type: Sequelize.TEXT
  }
})

module.exports = Puzzle
