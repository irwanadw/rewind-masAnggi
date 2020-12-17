const express = require('express');
const app = express();
app.use(express.json())

const rootRoute = require('./routes/rootRoute')
const getNote = require('./routes/rewindnote/getNote')
const addNote = require('./routes/rewindnote/addNote')


app.use(getNote)
app.use(addNote)
app.use(rootRoute)
const port = 3000
app.listen(port, () => {
    console.log(`Server listening on  http://localhost:3000`)
})