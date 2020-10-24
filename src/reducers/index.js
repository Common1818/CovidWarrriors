import { combineReducers } from "redux";
import covidData from "./covidData";
import patients from "./patients";
import students from "./students";

export default combineReducers({
  covidData,
  patients,
  students,
});
