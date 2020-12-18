const express = require('express')
const dbConnection = require (`../../connections/dbConnection`)
const app = express()

app.post('/rewindnote', async (req, res) => {
  // 👇 use req "body" property to access body at request to this route and save it to body variable
  const body = req.body
  await dbConnection('rewindnotes').insert(body)
  // 👇 push into an array anything inside the body
  res.send(req.body)
})

module.exports = app