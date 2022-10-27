const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    bodyPart: { type: String, require: true },
    equipment: { type: String, require: true },
    gifUrl: { type: String, require: true },
    name: { type: String, require: true },
    target: { type: String, require: true }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model("Exercise", ExerciseSchema)