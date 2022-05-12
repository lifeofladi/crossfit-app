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
  const workoutToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    ...newWorkout,
  };
  return Workout.createNewWorkout(workoutToInsert);
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
