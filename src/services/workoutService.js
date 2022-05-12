const { v4: uuid } = require("uuid");
const Workout = require("../database/workout");

const getAllWorkouts = () => {
  const workouts = Workout.getAllWorkouts();
  return workouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = newWorkout => {
  console.log("creating workout....");
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createNewWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
