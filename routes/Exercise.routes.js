const ExerciseRouter = require('express').Router();
const Exercise = require("../models/Exercise")



// getAll Exercises...
ExerciseRouter.get("/", async (req, res) => {
    try {
        const exercises = await Exercise.find({})
        return res.status(200).send(exercises)
    } catch (error) {
        return res.status(500).send(err)
    }
})


module.exports = ExerciseRouter;