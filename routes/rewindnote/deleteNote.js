const express=require(`express`)
const dbConnection = require (`../../connections/dbConnection`)
const app = express()

app.delete(`/rewindnote/:id`, async (req,res)=>{
    const notes_id = req.params.id
    await dbConnection('rewindnotes').where('id', notes_id).del()
    res.send("delete berhasil")
})

module.exports = app