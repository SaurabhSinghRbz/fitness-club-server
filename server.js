const express = require('express');
const cors = require('cors');
const database = require('./configs/db');

const app = express();
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Saurabh's fitness club api"
    })
})


const port = process.env.PORT || 8080;

app.listen(port, () => {
    database();
    console.log(`Server is running on http://localhost:${port}/`)
})