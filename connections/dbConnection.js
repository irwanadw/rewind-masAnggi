const db = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'nodeuser',
    password : 'Nodeuser@1234',
    database : 'rewindnotes'
  }
});

module.exports = db
