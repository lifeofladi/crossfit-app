const express = require("express");

const v1WorkoutRoutes = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// // For testing purposes
// app.get("/", (req, res) => {
//   res.send("<h2>It's Working!</h2>");
// });

app.use("/api/v1/workouts", v1WorkoutRoutes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
