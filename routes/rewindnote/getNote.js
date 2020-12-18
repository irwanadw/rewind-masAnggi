const express = require('express')
// const rewindnotes = require('../../databases/rewindnotesDB')
const dbConnection= require('../../connections/dbConnection')
const app = express()

// 👇 handle GET request method at /note
app.get('/rewindnote', async (req, res) => {
  const body = req.body
  // const notesById = await dbConnection.select().from('rewindnotes')
  const notesById = await dbConnection(`rewindnotes`).where(body)  // 👇 send the notes array variable
  res.send(notesById)
})

module.exports = app