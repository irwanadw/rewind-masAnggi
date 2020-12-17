const express = require('express')
const rewindnotes = require('../../databases/rewindnotesDB')
const app = express()

// 👇 handle GET request method at /note
app.get('/rewindnote', (req, res) => {
  // 👇 send the notes array variable
  res.send(rewindnotes)
})

module.exports = app