import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";

import { QueryOptions } from "../config/constants";
import { IQueryTypes } from "../config/types";
import { RootState } from "../dux/rootReducer";
import { IS_LOADING_DATA, SET_DATA_TYPE } from "../dux/reducers";
import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const DataTypeDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const dataType = useSelector((state: RootState) => state.dataType.dataType);
  const { fetchData } = useFetchData();
  useEffect(() => {
    if (dataType) {
      console.count("useEffect");
      fetchData(1, 0);
    }
  }, [dataType]);

  const handleQueryTypeChange = (queryType: IQueryTypes) => {
    dispatch({ type: IS_LOADING_DATA, payload: true });
    dispatch({ type: SET_DATA_TYPE, payload: queryType });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-warning">
        {dataType.charAt(0).toUpperCase() + dataType.substring(1) + "s"}
        <Dropdown.Menu variant="dark">
          {QueryOptions.map((option: IQueryTypes) => (
            <Dropdown.Item
              key={option}
              onClick={() => handleQueryTypeChange(option)}
            >
              {option.charAt(0).toUpperCase() + option.substring(1) + "s"}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Toggle>
    </Dropdown>
  );
};
