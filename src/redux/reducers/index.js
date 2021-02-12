import { combineReducers } from "redux";
import tasks from "./tasks";
import filters from "./filters";
import config from "./config";

const rootReducer = combineReducers({ tasks, filters, config })

export default rootReducer;