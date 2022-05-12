const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = newWorkout => {
  console.log("cheking to see if workout exists...");
  //check to see if workout exists
  const isAlreadyAdded =
    DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    console.log("workout already exists...");
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };
