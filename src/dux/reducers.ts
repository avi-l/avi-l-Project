import { DataTypeState, DataState } from "../config/types";

export const SET_DATA_TYPE = "SET_DATA_TYPE";
export const SET_DATA = "SET_DATA";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const IS_LOADING_DATA = "IS_LOADING_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
const initialDataType: DataTypeState = {
  dataType: "movie",
};

export const dataTypesReducer = (
  state = initialDataType,
  action: { type: string; payload: any }
): DataTypeState => {
  switch (action.type) {
    case "SET_DATA_TYPE":
      return {
        ...state,
        dataType: action.payload,
      };
    default:
      return state;
  }
};

export const loadingReducer = (
  state = false,
  action: { type: string; payload: boolean }
): boolean => {
  switch (action.type) {
    case "IS_LOADING_DATA":
      return action.payload;
    default:
      return state;
  }
};
const initialDataState: DataState = {
  data: [],
  limit: 0,
  offset: 0,
  total: 0,
};

export const dataReducer = (
  state = initialDataState,
  action: { type: string; payload: any }
): DataState => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload.docs,
        limit: action.payload.limit,
        offset: action.payload.offset,
        total: action.payload.total,
      };
    case "ADD_DATA":
      return {
        ...state,
        data: [...action.payload.docs, ...state.data],
        limit: action.payload.limit,
        offset: action.payload.offset,
        total: action.payload.total,
      };
    case "CLEAR_DATA":
      return initialDataState;
    default:
      return state;
  }
};
