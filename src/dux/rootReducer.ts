import { combineReducers } from "@reduxjs/toolkit";
import { dataTypesReducer, dataReducer, loadingReducer } from "./reducers";
import { DataTypeState, DataState } from "../config/types";

export interface RootState {
  data: DataState;
  dataType: DataTypeState;
  isLoading: boolean;
}
const rootReducer = combineReducers({
  data: dataReducer,
  dataType: dataTypesReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
