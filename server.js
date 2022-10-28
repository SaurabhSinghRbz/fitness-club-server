const express = require('express');
const cors = require('cors');
const database = require('./configs/db');
const ExerciseRouter = require('./routes/Exercise.routes');

const app = express();
app.use(cors())
app.use(express.json())
app.use("/api", ExerciseRouter)

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Saurabh's fitness club api",
        routes: {
            routesAccessibleToAll: {
                getAllExercises: "/api/exercises",
                getExerciseById: "/api/exercises/:id",
                getAllBodyParts: "/api/bodyparts",
                getExercisesByBodyPart: "/api/bodyparts/:bodypart",
                getExercisesByTarget: "/api/exercises/target/:target",
                getExercisesByEquipmeent: "/api/exercises/equipment/:equipment",
            },
            routesAccessibleToAdmin: {
                // to access these routes, you need to provide valid password in the body of the request
                createExercise: "/api/exercises",
                updateExercise: "/api/exercises/:id",
                deleteExercise: "/api/exercises/:id"
            }
        }
    })
})


const port = process.env.PORT || 8080;

app.listen(port, () => {
    database();
    console.log(`Server is running on http://localhost:${port}/`)
})