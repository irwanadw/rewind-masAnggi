const express = require('express')
const dbConnection= require(`../../connections/dbConnection`)
const app = express()

app.patch('/rewindnote/:id',async (req, res) => {
    const note_id = req.params.id
    const body = req.body
    console.log(note_id)
    // await dbConnection('rewindnotes').update(`notes_name`,`test`)
    await dbConnection('rewindnotes').where({ id: note_id}).update(body, ['id', `notes_name`])
    res.send(note_id)
})

module.exports = app
