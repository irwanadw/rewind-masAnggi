const express = require('express');
const app = express();
app.use(express.json())

const rootRoute = require('./routes/rootRoute')
const getNote = require('./routes/rewindnote/getNote')
const addNote = require('./routes/rewindnote/addNote')
const editNote= require('./routes/rewindnote/editNote')
const deleteNote= require(`./routes/rewindnote/deleteNote`)

app.use(getNote)
app.use(addNote)
app.use(editNote)
app.use(deleteNote)
app.use(rootRoute)
const port = 3000
app.listen(port, () => {
    console.log(`Server listening on  http://localhost:3000`)
})