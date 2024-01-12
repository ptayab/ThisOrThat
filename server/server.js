const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const restaurantRouter = require('./routes/restaurants');

const app = express()
app.use(cors())


const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
});

app.use('/restaurants', restaurantRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    });
