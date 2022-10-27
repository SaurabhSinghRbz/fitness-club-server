const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    bodyPart: { type: String, require: true },
    equipment: {},
    gifUrl: {},
    name: {},
    target: {}
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model("Exercise", ExerciseSchema)