const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())


const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    });
