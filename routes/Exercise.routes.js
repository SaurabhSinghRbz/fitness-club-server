const ExerciseRouter = require('express').Router();
const Exercise = require("../models/Exercise")






// getAll Exercises...
ExerciseRouter.get("/exercises", async (req, res) => {
    try {
        const exercises = await Exercise.find({})
        return res.status(200).send(exercises)
    } catch (error) {
        return res.status(500).send(err)
    }
})


// get one exercise by id...
ExerciseRouter.get("/exercises/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findOne({ id: req.params.id })
        return res.status(200).send(exercise)
    } catch (error) {
        return res.status(500).send(err)
    }
})


// get exercises by body part...
ExerciseRouter.get("/bodyparts/:bodypart", async (req, res) => {
    console.log("get exercises by body part...")
    try {
        const exercises = await Exercise.find({ bodyPart: req.params.bodypart })
        return res.status(200).send(exercises)
    } catch (error) {
        return res.status(500).send(err)
    }
})


// get all body parts...
ExerciseRouter.get("/bodyparts", async (req, res) => {
    try {
        const bodyparts = await Exercise.find({}).distinct("bodyPart")
        return res.status(200).send(bodyparts)
    } catch (error) {
        return res.status(500).send(err)
    }
})



// create a new exercise...
ExerciseRouter.post("/exercises", async (req, res) => {
    try {
        if (!req.body.password) {
            return res.status(400).send({ message: "password is required" })
        } else if (req.body.password === process.env.ADMIN_PASSWORD) {
            const exercise = await Exercise.create(req.body)
            return res.status(200).send(exercise)
        } else {
            return res.status(401).send("Unauthorized, Please Provide a Valid Password")
        }
    } catch (error) {
        return res.status(500).send(err)
    }

})

// update an exercise...
ExerciseRouter.put("/exercises/:id", async (req, res) => {
    try {
        if (!req.body.password) {
            return res.status(400).send({ message: "password is required" })
        } else if (req.body.password === process.env.ADMIN_PASSWORD) {
            const exercise = await Exercise.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
            return res.status(200).send(exercise)
        } else {
            return res.status(401).send("Unauthorized, Please Provide a Valid Password")
        }
    } catch (error) {
        return res.status(500).send(err)
    }
})

// delete an exercise...
ExerciseRouter.delete("/exercises/:id", async (req, res) => {
    try {
        if (!req.body.password) {
            return res.status(400).send({ message: "password is required" })
        } else if (req.body.password === process.env.ADMIN_PASSWORD) {
            const exercise = await Exercise.findOneAndDelete({ id: req.params.id })
            return res.status(200).send(exercise)
        } else {
            return res.status(401).send("Unauthorized, Please Provide a Valid Password")
        }
    } catch (error) {
        return res.status(500).send(err)
    }
})




module.exports = ExerciseRouter;