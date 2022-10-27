const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const database = async () => {
    mongoose.connect(process.env.MONGO_DB_DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((res) => console.log("Connected to database successfully.")).catch((err) => console.log(err))
}

module.exports = database;