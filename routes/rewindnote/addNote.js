const express = require('express')
const rewindnotes = require('../../databases/rewindnotesDB')
const app = express()

app.post('/rewindnote', (req, res) => {
  // 👇 use req "body" property to access body at request to this route and save it to body variable
  const body = req.body
  // 👇 push into an array anything inside the body
  rewindnotes.push(body)
  res.send(req.body)
})

module.exports = app